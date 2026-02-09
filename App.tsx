import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ArchitectureView from './components/ArchitectureView';

export default function App() {
  // 'dashboard' shows the Hero + Browser Window Dashboard
  // 'architecture' shows just the Architecture Document
  const [currentView, setCurrentView] = useState<'dashboard' | 'architecture'>('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-[#1CABE2] selection:text-white">
      
      {/* Top Header - Candidate & Role Info (Persistent) - Increased Size */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-24 flex justify-between items-center">
          <div className="flex items-center gap-5">
             <div className="bg-[#374EA2] text-white px-3 py-2 rounded text-sm font-bold tracking-widest">
                REQ# 590703
             </div>
             <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-3xl leading-tight">Technical Proposal</span>
                <span className="text-base text-gray-500 font-medium">Website Management Consultancy</span>
             </div>
          </div>
          <div className="flex items-center gap-6">
             <div className="text-right hidden sm:block">
                <p className="text-lg font-bold text-gray-900">Harim Jung</p>
                <p className="text-sm text-gray-500">Proposal Developer</p>
             </div>
             <div className="h-12 w-12 bg-[#1CABE2] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm">
                HJ
             </div>
          </div>
        </div>
      </nav>

      {/* DASHBOARD VIEW: Includes Hero + Fake Browser Dashboard */}
      {currentView === 'dashboard' && (
        <>
          {/* Hero Section */}
          <header className="bg-white pt-16 pb-20 px-6 border-b border-gray-200 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl font-black text-[#374EA2] mb-6 leading-tight tracking-tight">
                  Modernizing the <br/>
                  <span className="text-[#1CABE2]">Education Cannot Wait</span> Digital Ecosystem
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                  A strategic technical approach to <strong>Deliverable #3</strong> (Interactive Financial & Results Dashboards) and <strong>Deliverable #5</strong> (UX/UI Optimization), ensuring ECW's digital presence matches its 2023–2026 strategic growth.
                </p>
                
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded border border-slate-200">React & Node.js</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded border border-slate-200">Data Visualization (D3/Recharts)</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded border border-slate-200">WCAG 2.1 Compliance</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded border border-slate-200">Performance Optimization</span>
                </div>

                <div className="flex justify-center gap-4">
                   <button 
                      onClick={() => setCurrentView('architecture')}
                      className="bg-[#374EA2] hover:bg-[#2c3e80] text-white font-bold py-3 px-8 rounded shadow-lg shadow-blue-900/10 transition-all transform hover:-translate-y-0.5"
                   >
                      View Proposed Architecture
                   </button>
                   <button className="bg-white hover:bg-gray-50 text-[#374EA2] font-bold py-3 px-8 rounded shadow-sm border border-gray-200 transition-colors">
                      Download CV
                   </button>
                </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[200%] bg-gradient-to-r from-blue-50 to-transparent transform rotate-12 opacity-60 pointer-events-none"></div>
          </header>

          {/* Main Content Area */}
          <main className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            
            {/* Context / Setup for the Dashboard */}
            <div className="mb-10 max-w-3xl">
                <h3 className="text-[#1CABE2] font-bold uppercase tracking-widest text-xs mb-2">Proof of Concept</h3>
                <h2 className="text-2xl font-bold text-[#374EA2] mb-4">Interactive Results & Financial Data Prototype</h2>
                <p className="text-gray-600 leading-relaxed">
                  Addressing <strong>Key Deliverable #3</strong>: <em>"Develop new updated interactive financial and results dashboards."</em>
                  <br/><br/>
                  The following component demonstrates a React-based implementation of an executive dashboard. Unlike static PDFs, this approach allows for real-time data integration, improved accessibility (screen reader friendly structure), and a responsive layout that works on low-bandwidth connections in crisis regions.
                </p>
            </div>

            {/* Browser Window Frame for Dashboard */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-300 bg-white ring-1 ring-black/5">
                {/* Fake Browser Toolbar */}
                <div className="bg-[#f3f4f6] border-b border-gray-300 px-4 py-3 flex items-center gap-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
                    </div>
                    <div className="flex-1 bg-white border border-gray-300 rounded text-xs text-gray-500 py-1.5 px-3 flex items-center gap-2 shadow-inner">
                        <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        data.educationcannotwait.org/executive-dashboard
                    </div>
                    <div className="text-gray-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </div>

                {/* Actual Dashboard Content */}
                <div className="bg-[#F5F7FA] p-6 md:p-8 h-auto">
                    {/* Embedded Dashboard Header */}
                    <div className="mb-8 flex justify-between items-end border-b border-gray-200 pb-4">
                        <div>
                            <h2 className="text-2xl font-bold text-[#374EA2]">Executive Summary Dashboard</h2>
                            <p className="text-sm text-gray-500 mt-1">Real-time portfolio analytics • FY 2017-2023</p>
                        </div>
                        <div className="hidden md:flex gap-2">
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-600 shadow-sm">Global View</span>
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-600 shadow-sm">USD</span>
                        </div>
                    </div>
                    
                    <Dashboard />
                    
                    <div className="mt-8 text-center text-gray-400 text-xs py-8 border-t border-gray-200">
                        <p>© 2026 UNICEF Data Lab. Internal Strategic Document.</p>
                    </div>
                </div>
            </div>

            {/* Technical Implementation Note */}
            <div className="mt-12 grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-[#374EA2] mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#1CABE2] rounded-full"></span>
                        Drupal Integration
                    </h4>
                    <p className="text-sm text-gray-600">
                        Designed to be embedded within the existing Drupal CMS using a decoupled React approach, ensuring seamless updates without full site refactoring.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-[#374EA2] mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#1CABE2] rounded-full"></span>
                        Interactive Analytics
                    </h4>
                    <p className="text-sm text-gray-600">
                        Utilizing D3.js wrappers (Recharts) for high-performance rendering of financial allocations and result tracking, replacing static PDF reports.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-[#374EA2] mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#1CABE2] rounded-full"></span>
                        Low-Bandwidth UX
                    </h4>
                    <p className="text-sm text-gray-600">
                        Optimized asset loading and caching strategies to ensure performance in field offices with limited connectivity.
                    </p>
                </div>
            </div>

          </main>
        </>
      )}

      {/* ARCHITECTURE VIEW: Standalone Document */}
      {currentView === 'architecture' && (
        <main className="bg-slate-100 py-10 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 mb-6">
                <button 
                    onClick={() => setCurrentView('dashboard')}
                    className="flex items-center gap-2 text-[#374EA2] font-bold text-sm hover:underline"
                >
                    <i className="fas fa-arrow-left"></i> Back to Proposal Overview
                </button>
            </div>
            
            {/* The A4-like container is centered here */}
            <div className="flex justify-center overflow-x-auto pb-10">
                <ArchitectureView />
            </div>
        </main>
      )}

      <footer className="bg-[#374EA2] text-white py-12 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="font-bold text-lg mb-2">Harim Jung</p>
            <p className="text-blue-200 text-sm mb-6">Candidate for Website Management Consultancy (Req# 590703)</p>
            <p className="text-xs text-blue-300 opacity-60">
                This prototype is created for proposal purposes. <br/>
                It uses simulated data based on public ECW reports.
            </p>
        </div>
      </footer>
    </div>
  );
}