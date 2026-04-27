import { useState, useEffect } from "react";
import { CheckCircle, Circle } from "lucide-react";

export const HabitWidget = () =>{
    const [habits, setHabits] = useState([
        { id: 1, name: 'React practice', streak: '12 day streak', note: 'Build one small feature and explain it in your own words.', completed: true },
        { id: 2, name: 'UI observation', streak: '9 day streak', note: 'Study one well-designed product screen and break it into sections.', completed: false },
        { id: 3, name: 'Revise all my written notes', streak: '7 day streak', note: 'Follow up on what I learned after each coding session.', completed: false },
    ]);

    const toggle = (id: number) => {
        setHabits(habits.map(habit => habit.id === id ? { ...habit, completed: !habit.completed } : habit));
    };

                        useEffect(() => {
                            const saved = localStorage.getItem('pulse-habits');
                            if (saved) setHabits(JSON.parse(saved));
                            }, []);

                        useEffect(() => {
                            localStorage.setItem('pulse-habits', JSON.stringify(habits));
                            }, [habits]);

    return (
        <section className="bg-gray-800/50 border border-slate-700 p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6">Daily Habits</h3>
            <div className="space-y-4">
                {habits.map((habit) => (
                    <div key={habit.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                        <div>
                            <h4 className="font-medium">{habit.name}</h4>
                            <p className="text-sm text-slate-400">{habit.note}</p>
                            <p className="text-xs text-amber-500">{habit.streak}</p>
                        </div>
                        <button onClick={() => toggle(habit.id)}>
                            {habit.completed ? (
                                <CheckCircle className="text-green-500" />
                            ) : (
                                <Circle className="text-slate-500" />
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HabitWidget;