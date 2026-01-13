
import React, { useState } from 'react';
import { generateMarketingPlan } from '../services/geminiService';

const MarketingStudio: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [plans, setPlans] = useState<any[]>([]);
  const [productName, setProductName] = useState('');

  const handleGenerate = async () => {
    if (!productName) return;
    setIsGenerating(true);
    try {
      const results = await generateMarketingPlan({ name: productName });
      setPlans(results);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent ai-gradient">AI Content Studio</h1>
        <p className="text-slate-500 mt-2">Generate 365 days of marketing content in one click.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 space-y-2">
            <label className="text-sm font-bold text-slate-700">What are you selling today?</label>
            <input 
              type="text" 
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="e.g. Premium Cotton Kurta, Smart Watch..."
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <button 
            onClick={handleGenerate}
            disabled={isGenerating || !productName}
            className="ai-gradient text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:opacity-90 transition disabled:opacity-50 h-[58px]"
          >
            {isGenerating ? 'Generating Strategy...' : 'Generate 365-Day Plan'}
          </button>
        </div>
      </div>

      {plans.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-bottom-4 duration-500">
          {plans.map((plan, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  {plan.campaignName}
                </span>
                <button className="text-indigo-600 text-xs font-bold hover:underline">Copy Post</button>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Campaign: {plan.campaignName}</h3>
              <p className="text-sm text-slate-600 italic border-l-4 border-indigo-200 pl-4 mb-4">
                "{plan.caption}"
              </p>
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="text-[10px] font-bold text-slate-400 mb-1">VISUAL INSTRUCTION FOR AI IMAGE GEN:</p>
                <p className="text-xs text-slate-700">{plan.imageDescription}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 py-2 text-xs font-bold border border-slate-200 rounded-lg hover:bg-slate-50">IG Post</button>
                <button className="flex-1 py-2 text-xs font-bold border border-slate-200 rounded-lg hover:bg-slate-50">FB Banner</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarketingStudio;
