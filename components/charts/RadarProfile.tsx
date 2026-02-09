import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';

const data = [
  { subject: 'Access', current: 24, historical: 41, fullMark: 50 },
  { subject: 'Learning', current: 35, historical: 17, fullMark: 50 },
  { subject: 'Equity', current: 20, historical: 15, fullMark: 50 },
  { subject: 'Safety', current: 10, historical: 15, fullMark: 50 },
  { subject: 'Systems', current: 7, historical: 10, fullMark: 50 },
  { subject: 'Resource', current: 4, historical: 2, fullMark: 50 },
];

export default function RadarProfile() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid stroke="#eee" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 11, fontWeight: 500 }} />
        <PolarRadiusAxis angle={30} domain={[0, 50]} tick={false} axisLine={false} />
        <Radar
          name="Historical (2019-22)"
          dataKey="historical"
          stroke="#E2231A"
          strokeOpacity={0.5}
          fill="#E2231A"
          fillOpacity={0.1}
        />
        <Radar
          name="Current (2023)"
          dataKey="current"
          stroke="#1CABE2"
          strokeWidth={2}
          fill="#1CABE2"
          fillOpacity={0.4}
        />
        <Legend wrapperStyle={{ fontSize: '11px', marginTop: '10px' }} />
        <Tooltip 
            contentStyle={{ backgroundColor: 'white', borderRadius: '4px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            itemStyle={{ fontSize: '12px' }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}