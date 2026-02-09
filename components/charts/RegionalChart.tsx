import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts';

const data = [
  { name: 'East Africa', value: 32.8 },
  { name: 'MENA', value: 31.6 },
  { name: 'WCA', value: 28.9 },
  { name: 'Asia', value: 6.7 },
];

export default function RegionalChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#eee"/>
        <XAxis type="number" hide />
        <YAxis 
            dataKey="name" 
            type="category" 
            width={70} 
            tick={{ fontSize: 10, fill: '#666' }}
            axisLine={false}
            tickLine={false}
        />
        <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ fontSize: '12px' }}
        />
        <Bar dataKey="value" fill="#00833D" barSize={20} radius={[0, 4, 4, 0]}>
            <LabelList dataKey="value" position="right" formatter={(val: number) => `${val}%`} style={{ fontSize: '10px', fill: '#666', fontWeight: 'bold' }} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}