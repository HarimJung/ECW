import React from 'react';

export default function ArchitectureView() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Print Styles */}
      <style>{`
        @media print {
          @page { margin: 0; size: auto; }
          body { -webkit-print-color-adjust: exact; }
          .no-print { display: none !important; }
          .print-break-after { break-after: always; page-break-after: always; }
          .print-container {
            flex-direction: column !important;
            gap: 0 !important;
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            height: auto !important;
            overflow: visible !important;
            zoom: 0.85; /* Scale down slightly to fit A4 paper nicely */
          }
          .print-page {
            box-shadow: none !important;
            width: 100% !important;
            max-width: none !important;
            min-height: 100vh !important;
            margin: 0 !important;
            padding: 40px !important;
            border: none !important;
          }
        }
      `}</style>

      <div className="w-full max-w-[1900px] flex justify-end px-8 mb-6 no-print">
         <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-[#374EA2] text-white px-6 py-3 rounded shadow hover:bg-[#2a3b7d] transition-colors font-bold text-base"
            title="Opens the print dialog. Select 'Save as PDF' to download."
         >
            <i className="fas fa-print"></i> Print / Save as PDF
         </button>
      </div>

      <div className="print-container flex flex-col xl:flex-row gap-8 justify-center items-start bg-slate-200/50 p-8 min-h-screen overflow-x-auto">
        
        {/* ========================== PAGE 1: ARCHITECTURE & LOGIC ========================== */}
        <div className="print-page print-break-after bg-white text-gray-800 p-[60px] shadow-2xl w-[900px] min-h-[1270px] shrink-0 font-sans relative">
          
          {/* Header */}
          <header className="mb-10 border-b border-gray-200 pb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h5 className="text-[#1CABE2] font-bold tracking-wide text-xs mb-2">Technical Strategy</h5>
                <h1 className="font-display text-3xl font-bold text-[#374EA2] leading-tight">
                  Data Architecture &<br />Analytical Approach
                </h1>
              </div>
              <div className="text-right pt-1">
                 <div className="text-xs text-gray-400 font-mono mb-1">Doc-Ref-2026-ECW</div>
                 <div className="text-sm font-bold text-gray-500">Deliverable #3</div>
              </div>
            </div>
            <p className="text-base font-light text-gray-600 max-w-2xl leading-relaxed">
              A robust, multi-dimensional analysis integrating five historical datasets (2017–2023) to deliver defensible executive insights and strategic outcome tracking.
            </p>
          </header>

          {/* Section 1: Source Data */}
          <section className="mb-10">
            <h2 className="font-display text-lg font-bold text-[#374EA2] mb-4 flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#374EA2] text-white flex items-center justify-center text-xs mr-3 font-bold">1</span>
              Source Data Landscape
            </h2>

            <div className="border border-gray-200 rounded-sm p-5 bg-slate-50">
              <div className="grid grid-cols-5 gap-4 text-xs">
                {/* Col 1 */}
                <div className="flex flex-col">
                  <div className="font-bold text-[#374EA2] mb-2 border-b border-gray-300 pb-1 text-sm">Investments</div>
                  <span className="text-[10px] text-gray-500 mb-1 font-medium">Grain: Country</span>
                  <ul className="list-disc pl-3 space-y-1 text-gray-700">
                    <li>Geographic region</li>
                    <li>Crisis type</li>
                    <li>Prog. status</li>
                  </ul>
                </div>
                {/* Col 2 */}
                <div className="flex flex-col">
                  <div className="font-bold text-[#374EA2] mb-2 border-b border-gray-300 pb-1 text-sm">Donors</div>
                  <span className="text-[10px] text-gray-500 mb-1 font-medium">Grain: Source</span>
                  <ul className="list-disc pl-3 space-y-1 text-gray-700">
                    <li>Donor entity</li>
                    <li>Funding type</li>
                    <li>Contrib. date</li>
                  </ul>
                </div>
                {/* Col 3 (Hub) */}
                <div className="flex flex-col bg-white border border-[#1CABE2] -m-1 p-2 shadow-sm rounded-sm z-10">
                  <div className="font-bold text-[#1CABE2] mb-2 border-b border-blue-100 pb-1 text-center text-sm">Timeline Hub</div>
                  <span className="text-[10px] text-center text-gray-500 mb-2 font-medium">Key: Fiscal Year</span>
                  <div className="text-center space-y-1">
                    <span className="block text-[10px] font-mono bg-blue-50 py-1 text-blue-800">Portfolio ($)</span>
                    <span className="block text-[10px] font-mono bg-blue-50 py-1 text-blue-800">Beneficiaries (#)</span>
                  </div>
                </div>
                {/* Col 4 */}
                <div className="flex flex-col">
                  <div className="font-bold text-[#374EA2] mb-2 border-b border-gray-300 pb-1 text-sm">Prog. Metrics</div>
                  <span className="text-[10px] text-gray-500 mb-1 font-medium">Grain: KPI</span>
                  <ul className="list-disc pl-3 space-y-1 text-gray-700">
                    <li>Gender split</li>
                    <li>Disability %</li>
                    <li>Refugee status</li>
                  </ul>
                </div>
                {/* Col 5 */}
                <div className="flex flex-col">
                  <div className="font-bold text-[#374EA2] mb-2 border-b border-gray-300 pb-1 text-sm">Outcomes</div>
                  <span className="text-[10px] text-gray-500 mb-1 font-medium">Grain: Strategic</span>
                  <ul className="list-disc pl-3 space-y-1 text-gray-700">
                    <li>Strategy period</li>
                    <li>Outcome dim.</li>
                    <li>Perf. rate %</li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-gray-200 text-center">
                 <span className="text-[10px] text-gray-400 tracking-wide font-bold">Relational Model: Star Schema</span>
              </div>
            </div>
          </section>

          {/* Section 2: Transformation */}
          <section className="mb-10">
            <h2 className="font-display text-lg font-bold text-[#374EA2] mb-4 flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#374EA2] text-white flex items-center justify-center text-xs mr-3 font-bold">2</span>
              Transformation Logic
            </h2>
            
            <div className="grid grid-cols-3 gap-6">
                <div className="relative pl-3 border-l-2 border-gray-200">
                    <h3 className="font-bold text-xs text-gray-900 mb-1">Normalization</h3>
                    <p className="text-[11px] text-gray-600 leading-relaxed mb-1">
                        Harmonization of reporting periods to align "2019–2022" baseline with "2023" current reporting.
                    </p>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                        Unification of programme types (MYRP/FER) into a single dimension.
                    </p>
                </div>
                <div className="relative pl-3 border-l-2 border-gray-200">
                    <h3 className="font-bold text-xs text-gray-900 mb-1">Attribution Logic</h3>
                    <p className="text-[11px] text-gray-600 leading-relaxed mb-1">
                        <strong>Crisis splitting:</strong> 1/N allocation for multi-hazard contexts (e.g., "Conflict/Flood") to avoid double-counting.
                    </p>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                        <strong>LOD expressions:</strong> Fixed calculations for donor shares independent of country granularity.
                    </p>
                </div>
                <div className="relative pl-3 border-l-2 border-gray-200">
                    <h3 className="font-bold text-xs text-gray-900 mb-1">KPI Derivation</h3>
                    <p className="text-[11px] text-gray-600 leading-relaxed mb-1">
                        <strong>Efficiency index:</strong> [Budget] / [Child] trend analysis separate for emergency vs. resilience.
                    </p>
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                        <strong>Diversification:</strong> HHI computation on donor portfolios to quantify concentration risk.
                    </p>
                </div>
            </div>
          </section>

          {/* Section 3: Validation */}
          <section className="mb-10">
            <h2 className="font-display text-lg font-bold text-[#374EA2] mb-4 flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#374EA2] text-white flex items-center justify-center text-xs mr-3 font-bold">3</span>
              Quality Assurance
            </h2>

            <div className="border border-gray-200 rounded-sm">
                <table className="w-full text-left text-xs">
                    <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
                        <tr>
                            <th className="py-2 px-4 w-1/4 font-bold tracking-wide">Step</th>
                            <th className="py-2 px-4 w-1/2 font-bold tracking-wide">Methodology</th>
                            <th className="py-2 px-4 w-1/4 font-bold tracking-wide text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr>
                            <td className="py-2 px-4 font-medium text-gray-800">Completeness</td>
                            <td className="py-2 px-4 text-gray-600">Automated null checks on financials; zero-imputation.</td>
                            <td className="py-2 px-4 text-right text-[#00833D] font-bold">100% Pass</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 font-medium text-gray-800">Reconciliation</td>
                            <td className="py-2 px-4 text-gray-600">Cross-check Donor Total ($4.6B) vs Portfolio Aggregates.</td>
                            <td className="py-2 px-4 text-right text-[#00833D] font-bold">Matched</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 font-medium text-gray-800">Trend Logic</td>
                            <td className="py-2 px-4 text-gray-600">Monotonic check on Cumulative Reach (no negative growth).</td>
                            <td className="py-2 px-4 text-right text-[#00833D] font-bold">Valid</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 font-medium text-gray-800">Outlier Scan</td>
                            <td className="py-2 px-4 text-gray-600">&gt;20% deviations in Budget/Child cost ratios.</td>
                            <td className="py-2 px-4 text-right text-[#374EA2] font-bold">Flagged</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </section>

          {/* Section 4: Output Model */}
          <section className="mt-auto pt-6 border-t border-gray-200">
             <h2 className="font-display text-xs font-bold text-gray-400 mb-3 tracking-wide">
              Unified Analytical Model Specification
            </h2>
            <div className="bg-slate-50 border border-gray-200 p-4 rounded-sm">
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <h4 className="text-[10px] font-bold text-[#374EA2] mb-1 border-b border-gray-200 pb-1">Dimensions</h4>
                        <p className="text-[10px] text-gray-600 leading-snug">Year, Period, Region, Country, Programme type, Crisis type</p>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold text-[#374EA2] mb-1 border-b border-gray-200 pb-1">Measures</h4>
                        <p className="text-[10px] text-gray-600 leading-snug">Cumulative portfolio ($), Children reached (#), Budget/Child, Outcome %</p>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold text-[#374EA2] mb-1 border-b border-gray-200 pb-1">Calculated</h4>
                        <p className="text-[10px] text-gray-600 leading-snug">HHI index, Efficiency score, Growth rate (YoY/CAGR)</p>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold text-[#374EA2] mb-1 border-b border-gray-200 pb-1">Governance</h4>
                        <p className="text-[10px] text-gray-600 leading-snug">LOD-fixed expressions, Standardized color palette</p>
                    </div>
                </div>
            </div>
          </section>

          {/* Page Footer */}
          <div className="absolute bottom-6 left-[60px] right-[60px] flex justify-between items-center text-gray-400 text-[10px] border-t border-gray-200 pt-2">
              <p><strong>Methodology:</strong> Data Architecture & Processing</p>
              <p>Page 1 of 2</p>
          </div>
        </div>

        {/* ========================== PAGE 2: DESIGN RATIONALE ========================== */}
        <div className="print-page bg-white text-gray-800 p-[60px] shadow-2xl w-[900px] min-h-[1270px] shrink-0 font-sans relative">
          
          {/* Header */}
          <header className="mb-10 border-b border-gray-200 pb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h5 className="text-[#1CABE2] font-bold tracking-wide text-xs mb-2">Design Rationale</h5>
                <h1 className="font-display text-3xl font-bold text-[#374EA2] leading-tight">
                  Dashboard Logic &<br />Calculation Framework
                </h1>
              </div>
              <div className="text-right pt-1">
                 <div className="text-xs text-gray-400 font-mono mb-1">Doc-Ref-2026-ECW</div>
                 <div className="text-sm font-bold text-gray-500">Deliverable #5</div>
              </div>
            </div>
            <p className="text-base font-light text-gray-600 max-w-2xl leading-relaxed">
              Translating raw data into executive intelligence: A framework for defensible KPI selection, precise LOD calculations, and narrative flow.
            </p>
          </header>

          {/* Section 1: KPI Framework */}
          <section className="mb-10">
            <h2 className="font-display text-lg font-bold text-[#374EA2] mb-4 flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#374EA2] text-white flex items-center justify-center text-xs mr-3 font-bold">1</span>
              KPI Definition & Formula Strategy
            </h2>
            
            <div className="grid grid-cols-2 gap-6">
                {/* Left Column: Scale & Efficiency */}
                <div className="space-y-4">
                    {/* Card 1 */}
                    <div className="border border-gray-200 rounded-sm p-4">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-sm text-gray-800">1. Portfolio Scale & Growth</h4>
                            <span className="text-[10px] font-bold text-[#374EA2] bg-blue-50 px-2 py-1 rounded-sm">Finance</span>
                        </div>
                        <p className="text-[11px] text-gray-500 italic mb-2">Question: Is the fund accelerating fast enough to meet needs?</p>
                        <div className="bg-gray-50 text-gray-600 p-2 rounded-sm text-[10px] font-mono border-l-2 border-[#374EA2] whitespace-pre-wrap leading-normal">
  {`({FIXED : MAX(2023_Children)} - {FIXED : MAX(2022_Children)}) 
  / {FIXED : MAX(2022_Children)} * 100
  >> Result: +33% (Acceleration signal)`}
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-gray-200 rounded-sm p-4">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-sm text-gray-800">2. Cost Efficiency (FER/MYRP)</h4>
                            <span className="text-[10px] font-bold text-[#374EA2] bg-blue-50 px-2 py-1 rounded-sm">Efficiency</span>
                        </div>
                        <p className="text-[11px] text-gray-500 italic mb-2">Question: Are we optimizing unit costs while deepening impact?</p>
                        <div className="bg-gray-50 text-gray-600 p-2 rounded-sm text-[10px] font-mono border-l-2 border-[#374EA2] whitespace-pre-wrap leading-normal">
  {`FER: {FIXED Year: AVG(FER_Budget)} → $53 (Breadth)
  MYRP: {FIXED Year: AVG(MYRP_Budget)} → $241 (Depth)`}
                        </div>
                    </div>
                </div>

                {/* Right Column: Risk & Impact */}
                <div className="space-y-4">
                    {/* Card 3 */}
                    <div className="border border-gray-200 rounded-sm p-4">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-sm text-gray-800">3. Donor Diversification</h4>
                            <span className="text-[10px] font-bold text-[#00833D] bg-green-50 px-2 py-1 rounded-sm">Resilience</span>
                        </div>
                        <p className="text-[11px] text-gray-500 italic mb-2">Question: Is the fund over-reliant on a single source?</p>
                        <div className="bg-gray-50 text-gray-600 p-2 rounded-sm text-[10px] font-mono border-l-2 border-[#1CABE2] whitespace-pre-wrap leading-normal">
  {`// Herfindahl-Hirschman Index
  {FIXED : SUM(POWER([Market_Share_Pct], 2))} / 100
  >> Target: < 15 (Current: 6.3 = Healthy)`}
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="border border-gray-200 rounded-sm p-4">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-sm text-gray-800">4. Strategic Outcome Shift</h4>
                            <span className="text-[10px] font-bold text-[#00833D] bg-green-50 px-2 py-1 rounded-sm">Impact</span>
                        </div>
                        <p className="text-[11px] text-gray-500 italic mb-2">Question: Are we delivering on the promise of holistic education?</p>
                        <div className="bg-gray-50 text-gray-600 p-2 rounded-sm text-[10px] font-mono border-l-2 border-[#1CABE2] whitespace-pre-wrap leading-normal">
  {`{FIXED Outcome: MAX(2023_Pct)} 
  - {FIXED Outcome: MAX(2019-22_Pct)}
  >> Result: Learning +18pp, Access -17pp`}
                        </div>
                    </div>
                </div>
            </div>
          </section>

          {/* Section 2: Visualization Rationale */}
          <section className="mb-10">
            <h2 className="font-display text-lg font-bold text-[#374EA2] mb-4 flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#374EA2] text-white flex items-center justify-center text-xs mr-3 font-bold">2</span>
              Visualization Rationale & Chart Selection
            </h2>

            <div className="grid grid-cols-3 gap-6">
                {/* Table */}
                <div className="col-span-2 border border-gray-200 rounded-sm">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
                            <tr>
                                <th className="py-2 px-3 w-1/4 font-bold tracking-wide">Chart Type</th>
                                <th className="py-2 px-3 w-3/4 font-bold tracking-wide">Why This Visualization?</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="py-2 px-3 font-medium text-gray-800">Dual-Axis Combo</td>
                                <td className="py-2 px-3 text-gray-600">Correlates funding scaling ($) with human impact (#). Shows if efficiency is holding as scale increases.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-3 font-medium text-gray-800">Radar Chart</td>
                                <td className="py-2 px-3 text-gray-600">Visualizes the "shape" of strategy. Instantly reveals the pivot from Access-heavy to Learning-focused.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-3 font-medium text-gray-800">Butterfly Bar</td>
                                <td className="py-2 px-3 text-gray-600">Symmetrical comparison of two distinct models (FER vs MYRP). Highlights targeting differences clearly.</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-3 font-medium text-gray-800">Treemap</td>
                                <td className="py-2 px-3 text-gray-600">Displays hierarchical part-to-whole relationships better than pie charts for large sets (19 donors).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                {/* Technical Box */}
                <div className="col-span-1 bg-[#EFF6FF] border border-[#BFDBFE] rounded-sm p-4">
                    <h4 className="font-bold text-[#374EA2] text-xs mb-2">Technical Note: The "Grain" Challenge</h4>
                    <p className="text-[10px] text-blue-900 mb-3 leading-relaxed">
                        Combining <strong>Country</strong> data (15 rows) with <strong>Donor</strong> data (19 rows) creates a cartesian product risk.
                    </p>
                    <div className="bg-white p-2 rounded border border-blue-200 mb-2">
                        <p className="text-[9px] text-gray-400 font-bold mb-1">Solution: Tableau LODs</p>
                        <p className="text-[10px] text-gray-600 font-mono">
                            {`{FIXED [Year] : SUM(Portfolio)}`} <br/>
                            {`{FIXED [Donor] : SUM(Funding)}`}
                        </p>
                    </div>
                    <p className="text-[9px] text-blue-500 italic">
                        *Allows independent aggregation without data blending.
                    </p>
                </div>
            </div>
          </section>

          {/* Section 3: Storytelling Architecture */}
          <section className="mt-auto">
            <h2 className="font-display text-lg font-bold text-[#374EA2] mb-4 flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#374EA2] text-white flex items-center justify-center text-xs mr-3 font-bold">3</span>
              Dashboard Storytelling Architecture
            </h2>
            
            <div className="grid grid-cols-4 gap-4 border border-gray-200 rounded-sm p-4 bg-slate-50">
                <div className="relative text-center p-2">
                    <span className="absolute top-0 right-0 text-3xl font-bold text-gray-200 -z-10">01</span>
                    <div className="text-xs font-bold text-gray-800 mb-1">Scale</div>
                    <p className="text-[10px] text-gray-500">Is the portfolio growing sustainably?</p>
                    {/* Arrow */}
                    <div className="absolute top-1/2 -right-3 -mt-2 text-gray-300">▶</div>
                </div>
                <div className="relative text-center p-2">
                    <span className="absolute top-0 right-0 text-3xl font-bold text-gray-200 -z-10">02</span>
                    <div className="text-xs font-bold text-gray-800 mb-1">Strategy</div>
                    <p className="text-[10px] text-gray-500">Are we hitting the right outcomes?</p>
                    {/* Arrow */}
                    <div className="absolute top-1/2 -right-3 -mt-2 text-gray-300">▶</div>
                </div>
                <div className="relative text-center p-2">
                    <span className="absolute top-0 right-0 text-3xl font-bold text-gray-200 -z-10">03</span>
                    <div className="text-xs font-bold text-gray-800 mb-1">Efficiency</div>
                    <p className="text-[10px] text-gray-500">Are unit costs optimized per model?</p>
                    {/* Arrow */}
                    <div className="absolute top-1/2 -right-3 -mt-2 text-gray-300">▶</div>
                </div>
                <div className="relative text-center p-2">
                    <span className="absolute top-0 right-0 text-3xl font-bold text-gray-200 -z-10">04</span>
                    <div className="text-xs font-bold text-gray-800 mb-1">Coverage</div>
                    <p className="text-[10px] text-gray-500">Is distribution equitable?</p>
                </div>
            </div>
          </section>

          {/* Page Footer */}
          <div className="absolute bottom-6 left-[60px] right-[60px] flex justify-between items-center text-gray-400 text-[10px] border-t border-gray-200 pt-2">
              <p><strong>Methodology:</strong> Design Rationale & Calculation Logic</p>
              <p>Page 2 of 2</p>
          </div>

        </div>

      </div>
    </div>
  );
}