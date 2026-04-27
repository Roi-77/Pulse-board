import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { day: 'Mon', velocity: 45 },
  { day: 'Tue', velocity: 52 },
  { day: 'Wed', velocity: 48 },
  { day: 'Thu', velocity: 70 },
  { day: 'Fri', velocity: 61 },
  { day: 'Sat', velocity: 85 },
  { day: 'Sun', velocity: 90 },
];

export const GrowthChart = () => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl h-[350px]">
      <h3 className="text-lg font-bold mb-6">Growth Velocity (Weekly)</h3>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorVel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
            itemStyle={{ color: '#22d3ee' }}
          />
          <Area 
            type="monotone" 
            dataKey="velocity" 
            stroke="#22d3ee" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorVel)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GrowthChart;