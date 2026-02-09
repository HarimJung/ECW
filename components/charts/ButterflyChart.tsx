import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  LabelList
} from 'recharts';

const data = [
  { name: 'Girls', fer: -56.5, myrp: 58.4 },
  { name: 'Disability', fer: -8.0, myrp: 12.0 },
  { name: 'IDP', fer: -37.0, myrp: 20.0 },
  { name: 'Refugee', fer: -37.0, myrp: 13.0 },
];

const tooltipFormatter = (value: number) => {
    return Math.abs(value) + '%';
};

const labelFormatter = (value: number) => {
    return Math.abs(value);
};

export default function ButterflyChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        data={data}
        stackOffset="sign"
        margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
        <XAxis type="number" hide />
        <YAxis 
            dataKey="name" 
            type="category" 
            tick={{ fontSize: 11, fill: '#555', fontWeight: 500 }} 
            width={70}
            interval={0}
        />
        <Tooltip 
            formatter={tooltipFormatter}
            cursor={{fill: 'transparent'}}
            contentStyle={{ borderRadius: '4px', border: '1px solid #eee', fontSize: '12px' }}
        />
        <Legend wrapperStyle={{ fontSize: '11px' }} />
        <ReferenceLine x={0} stroke="#ccc" />
        <Bar name="FER (%)" dataKey="fer" fill="#1CABE2" barSize={24} radius={[4, 0, 0, 4]}>
            <LabelList dataKey="fer" position="left" formatter={labelFormatter} style={{fontSize: '10px', fill: '#1CABE2', fontWeight: 'bold'}} />
        </Bar>
        <Bar name="MYRP (%)" dataKey="myrp" fill="#374EA2" barSize={24} radius={[0, 4, 4, 0]}>
            <LabelList dataKey="myrp" position="right" formatter={labelFormatter} style={{fontSize: '10px', fill: '#374EA2', fontWeight: 'bold'}} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}