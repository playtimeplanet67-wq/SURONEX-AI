
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, conversion: 12 },
  { name: 'Feb', sales: 3000, conversion: 15 },
  { name: 'Mar', sales: 5000, conversion: 18 },
  { name: 'Apr', sales: 8000, conversion: 22 },
  { name: 'May', sales: 7000, conversion: 20 },
];

const AdminPanel: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Suraj Sharma's Dashboard</h1>
          <p className="text-slate-500">Founder Control Center • SURONEX AI</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">₹</div>
            <div>
              <p className="text-xs text-slate-500">Today's Profit</p>
              <p className="font-bold">₹12,450</p>
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">⚠</div>
            <div>
              <p className="text-xs text-slate-500">Fraud Score</p>
              <p className="font-bold">Low (2%)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-semibold mb-6">Sales Performance (AI-Driven)</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="sales" stroke="#6366f1" fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-semibold mb-4">AI Seller Controls</h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">AI Reply Tone</label>
              <select className="w-full mt-1 bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Professional (Premium)</option>
                <option>Aggressive (Sales-Focused)</option>
                <option>Soft (Relationship-Focused)</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Discount Ceiling</label>
              <input type="range" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>5%</span>
                <span>Max: 20%</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-xl">
              <span className="text-sm font-medium text-indigo-900">COD Verification AI</span>
              <div className="w-12 h-6 bg-indigo-600 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition">
              Apply Global AI Rules
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Abandoned Carts', val: '42', color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'AI Success Rate', val: '94%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Avg Order Value', val: '₹1,890', color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'Human Fallbacks', val: '4', color: 'text-rose-600', bg: 'bg-rose-50' },
        ].map((item, idx) => (
          <div key={idx} className={`${item.bg} p-4 rounded-2xl border border-white/50`}>
            <p className="text-xs font-medium text-slate-600">{item.label}</p>
            <p className={`text-2xl font-bold ${item.color} mt-1`}>{item.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
