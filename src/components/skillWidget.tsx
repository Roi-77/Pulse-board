import { Zap } from 'lucide-react';

const skills =[
    {name: 'React', level: 65, color: 'bg-blue-500'},
    {name: 'Backend Development', level: 40, color: 'bg-yellow-500'},
    {name: 'TailwindCSS', level: 70, color: 'bg-purple-500'},

];

export const SkillWidget = () => {
    return (
        <section className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2"> 
                <Zap size={24} className="text-amber-500"/> Proficiency</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((skill) => (
                    <div key={skill.name} className="mb-4">
                        <div className="flex justify-between mb-1">
                            <span className="text-slate-300">{skill.name}</span>
                            <span className="text-amber-500 font-bold">{skill.level}%</span>
                        </div>
                        <div className="bg-slate-600 h-2 rounded-full overflow-hidden">
                            <div className={`h-full ${skill.color} rounded-full`} style={{ width: `${skill.level}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}