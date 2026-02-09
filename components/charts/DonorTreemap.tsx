import React from 'react';
import {
  Treemap,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const data = [
  { name: 'World Bank', value: 466.6 },
  { name: 'BHA USA', value: 430.3 },
  { name: 'UK', value: 413.2 },
  { name: 'US UNICEF', value: 383.9 },
  { name: 'Others', value: 1500.0 },
  { name: 'EU Comm.', value: 322.1 },
  { name: 'KfW', value: 264.5 },
];

const COLORS = ['#374EA2', '#1CABE2', '#00833D', '#FFC20E', '#999999', '#E2231A', '#666666'];

const CustomizedContent = (props: any) => {
  const { root, depth, x, y, width, height, index, name, value } = props;
  
  // Basic check to ensure text fits
  if (width < 30 || height < 30) return null;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={COLORS[index % COLORS.length]}
        stroke="#fff"
        strokeWidth={2}
      />
      <text
        x={x + width / 2}
        y={y + height / 2 - 4}
        textAnchor="middle"
        fill="#fff"
        fontSize={11}
        fontWeight="bold"
        style={{ pointerEvents: 'none' }}
      >
        {name}
      </text>
      <text
        x={x + width / 2}
        y={y + height / 2 + 10}
        textAnchor="middle"
        fill="#fff"
        fontSize={10}
        style={{ pointerEvents: 'none', opacity: 0.9 }}
      >
        ${value}M
      </text>
    </g>
  );
};

export default function DonorTreemap() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <Treemap
        data={data}
        dataKey="value"
        stroke="#fff"
        fill="#8884d8"
        content={<CustomizedContent />}
        animationDuration={1000}
      >
        <Tooltip 
            formatter={(value: number) => `$${value}M`}
            contentStyle={{ borderRadius: '4px', fontSize: '12px' }}
        />
      </Treemap>
    </ResponsiveContainer>
  );
}