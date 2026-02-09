import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Armed Conflict', value: 11 },
  { name: 'Refugee Crisis', value: 3 },
  { name: 'Climate/Flood', value: 2 },
  { name: 'Other', value: 1 },
];

const COLORS = ['#E2231A', '#1CABE2', '#00833D', '#FFC20E'];

export default function CrisisPie() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={70}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="white" strokeWidth={2} />
          ))}
        </Pie>
        <Tooltip itemStyle={{ fontSize: '12px' }} />
        <Legend 
            layout="vertical" 
            verticalAlign="middle" 
            align="right"
            wrapperStyle={{ fontSize: '11px', color: '#666' }}
            iconSize={8}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}