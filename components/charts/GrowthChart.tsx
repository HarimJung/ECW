import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle
} from 'recharts';

const data = [
  { year: '2017', investment: 55.0, children: 0.5 },
  { year: '2018', investment: 130.7, children: 1.6 },
  { year: '2019', investment: 217.0, children: 3.1 },
  { year: '2020', investment: 389.0, children: 4.6 },
  { year: '2021', investment: 530.0, children: 7.0 },
  { year: '2022', investment: 798.1, children: 8.8 },
  { year: '2023', investment: 1029.8, children: 11.7 },
];

export default function GrowthChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
        <XAxis 
            dataKey="year" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#666', fontSize: 12 }} 
            dy={10}
        />
        <YAxis 
            yAxisId="left" 
            label={{ value: 'Investment ($M)', angle: -90, position: 'insideLeft', fontSize: 10, fill: '#999' }}
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#999', fontSize: 10 }} 
        />
        <YAxis 
            yAxisId="right" 
            orientation="right" 
            label={{ value: 'Children (M)', angle: 90, position: 'insideRight', fontSize: 10, fill: '#999' }}
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#999', fontSize: 10 }} 
        />
        <Tooltip 
            contentStyle={{ backgroundColor: 'white', borderRadius: '4px', border: '1px solid #eee', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
            itemStyle={{ fontSize: '12px' }}
        />
        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} iconType="circle" />
        <Bar 
            yAxisId="left" 
            dataKey="investment" 
            name="Cumulative Inv. ($M)" 
            barSize={40} 
            fill="#374EA2" 
            activeBar={<Rectangle fill="#1CABE2" stroke="white" />}
            radius={[4, 4, 0, 0]}
        />
        <Line 
            yAxisId="right" 
            type="monotone" 
            dataKey="children" 
            name="Children Reached (M)" 
            stroke="#1CABE2" 
            strokeWidth={3} 
            dot={{ r: 4, fill: '#1CABE2', strokeWidth: 2, stroke: '#fff' }} 
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}