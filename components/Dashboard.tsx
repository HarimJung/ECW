import React from 'react';
import KPICard from './KPICard';
import GrowthChart from './charts/GrowthChart';
import RadarProfile from './charts/RadarProfile';
import ButterflyChart from './charts/ButterflyChart';
import DonorTreemap from './charts/DonorTreemap';
import RegionalChart from './charts/RegionalChart';
import EfficiencyChart from './charts/EfficiencyChart';
import CrisisPie from './charts/CrisisPie';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* KPI Section - Fixed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <KPICard 
          label="Children Reached" 
          value="11.7M" 
          trend="+33% YoY" 
          trendPositive={true}
          subtext="Direct beneficiaries"
        />
        <KPICard 
          label="Cumulative Portfolio" 
          value="$1,030M" 
          trend="+18.7x Scale" 
          trendPositive={true}
          subtext="Since inception"
        />
        <KPICard 
          label="Cost Efficiency" 
          value="High" 
          trend="FER $53/Child" 
          trendPositive={true}
          subtext="Optimized delivery"
        />
        <KPICard 
          label="Active Donors" 
          value="19" 
          trend="HHI: 6.3" 
          trendNeutral={true}
          subtext="Healthy diversification"
        />
        <KPICard 
          label="Crisis Countries" 
          value="15" 
          trend="73% Dual Prog." 
          trendNeutral={true}
          subtext="Active response"
        />
      </div>

      {/* Row 1: Growth & Strategy - Increased Height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[500px]">
        <div className="lg:col-span-8 bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-2">
            <h3 className="text-[#374EA2] font-bold text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-[#1CABE2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                Portfolio Growth Trajectory (2017-2023)
            </h3>
            <span className="text-xs text-gray-400 font-medium">Dual-Axis: Investment vs Reach</span>
          </div>
          <div className="flex-1 w-full min-h-0">
            <GrowthChart />
          </div>
        </div>
        <div className="lg:col-span-4 bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-2">
            <h3 className="text-[#374EA2] font-bold text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-[#1CABE2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Strategic Outcome Shift
            </h3>
            <span className="text-xs text-gray-400 font-medium">2023 vs Historical</span>
          </div>
          <div className="flex-1 w-full min-h-0">
            <RadarProfile />
          </div>
        </div>
      </div>

      {/* Row 2: Deep Dive - Increased Height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[450px]">
        <div className="lg:col-span-4 bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
             <h3 className="text-[#374EA2] font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                <svg className="w-4 h-4 text-[#374EA2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                FER vs MYRP Profile
             </h3>
             <span className="text-[10px] text-gray-400">Targeting Comparison</span>
          </div>
          <div className="flex-1 w-full min-h-0">
            <ButterflyChart />
          </div>
        </div>
        <div className="lg:col-span-4 bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
            <h3 className="text-[#374EA2] font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                <svg className="w-4 h-4 text-[#374EA2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                Donor Portfolio
            </h3>
            <span className="text-[10px] text-gray-400">Funding Share by Donor</span>
          </div>
          <div className="flex-1 w-full min-h-0">
            <DonorTreemap />
          </div>
        </div>
        <div className="lg:col-span-4 bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
            <h3 className="text-[#374EA2] font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                <svg className="w-4 h-4 text-[#374EA2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Regional Investment
            </h3>
            <span className="text-[10px] text-gray-400">Geographic Allocation</span>
          </div>
          <div className="flex-1 w-full min-h-0">
            <RegionalChart />
          </div>
        </div>
      </div>

      {/* Row 3: Efficiency & Impact - Increased Height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[450px]">
        <div className="lg:col-span-7 bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
            <h3 className="text-[#374EA2] font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                <svg className="w-4 h-4 text-[#374EA2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Cost Efficiency Trend
            </h3>
            <span className="text-[10px] text-gray-400">Budget Per Child (USD)</span>
          </div>
          <div className="flex-1 w-full min-h-0">
            <EfficiencyChart />
          </div>
        </div>
        <div className="lg:col-span-5 bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
             <h3 className="text-[#374EA2] font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                <svg className="w-4 h-4 text-[#374EA2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                Crisis Type Portfolio
             </h3>
             <span className="text-[10px] text-gray-400">Investment by Crisis Context</span>
          </div>
          <div className="flex-1 w-full min-h-0">
            <CrisisPie />
          </div>
        </div>
      </div>

    </div>
  );
}