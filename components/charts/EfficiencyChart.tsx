import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { year: '2020', fer: 59, myrp: 131 },
  { year: '2021', fer: 57, myrp: 100 },
  { year: '2022', fer: 59, myrp: 232 },
  { year: '2023', fer: 53, myrp: 241 },
];

export default function EfficiencyChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
        <XAxis 
            dataKey="year" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#888', fontSize: 11 }} 
            dy={10}
        />
        <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#888', fontSize: 11 }} 
            label={{ value: 'USD ($)', angle: -90, position: 'insideLeft', fill: '#ccc', fontSize: 10 }}
        />
        <Tooltip 
            contentStyle={{ border: '1px solid #f0f0f0', borderRadius: '4px', fontSize: '12px' }}
        />
        <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
        <Line 
            type="monotone" 
            dataKey="fer" 
            name="FER Budget/Child" 
            stroke="#1CABE2" 
            strokeWidth={3} 
            dot={{ r: 4, strokeWidth: 2, fill: '#fff', stroke: '#1CABE2' }} 
        />
        <Line 
            type="monotone" 
            dataKey="myrp" 
            name="MYRP Budget/Child" 
            stroke="#374EA2" 
            strokeWidth={2} 
            strokeDasharray="5 5"
            dot={{ r: 3, strokeWidth: 1, fill: '#374EA2' }} 
        />
      </LineChart>
    </ResponsiveContainer>
  );
}