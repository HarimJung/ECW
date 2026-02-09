import React from 'react';

interface KPICardProps {
  label: string;
  value: string;
  trend: string;
  trendPositive?: boolean;
  trendNeutral?: boolean;
  subtext: string;
}

const KPICard: React.FC<KPICardProps> = ({ label, value, trend, trendPositive, trendNeutral, subtext }) => {
  let trendColor = "text-gray-500";
  if (trendPositive) trendColor = "text-[#00833D]";
  if (trendNeutral) trendColor = "text-gray-500";
  // Assuming negative would be red, but not used in this specific dataset
  
  return (
    <div className="bg-white p-5 rounded shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col h-full justify-between">
      <div>
        <p className="text-gray-500 text-[11px] font-bold uppercase tracking-wider mb-1">{label}</p>
        <h2 className="text-3xl font-black text-[#333] tracking-tight">{value}</h2>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-end">
        <span className="text-[10px] text-gray-400 font-medium">{subtext}</span>
        <span className={`text-xs font-bold ${trendColor} bg-opacity-10 px-1 rounded`}>
            {trendPositive && "▲ "} 
            {trend}
        </span>
      </div>
    </div>
  );
};

export default KPICard;