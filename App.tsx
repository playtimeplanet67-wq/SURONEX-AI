
import React, { useState } from 'react';
import { AppView, Product } from './types';
import Storefront from './components/Storefront';
import AdminPanel from './components/AdminPanel';
import MarketingStudio from './components/MarketingStudio';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.STOREFRONT);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const renderContent = () => {
    switch (view) {
      case AppView.ADMIN:
        return <AdminPanel />;
      case AppView.STUDIO:
        return <MarketingStudio />;
      case AppView.STOREFRONT:
      default:
        return <Storefront onSelectProduct={(p) => { setSelectedProduct(p); setIsChatOpen(true); }} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setView(AppView.STOREFRONT)}
          >
            <div className="w-10 h-10 ai-gradient rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">S</div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">SURONEX AI</h1>
              <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest leading-none">Smart Commerce</p>
            </div>
          </div>

          <div className="hidden md:flex gap-8">
            <button onClick={() => setView(AppView.STOREFRONT)} className={`text-sm font-bold ${view === AppView.STOREFRONT ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}>Marketplace</button>
            <button onClick={() => setView(AppView.STUDIO)} className={`text-sm font-bold ${view === AppView.STUDIO ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}>AI Content Studio</button>
            <button onClick={() => setView(AppView.ADMIN)} className={`text-sm font-bold ${view === AppView.ADMIN ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}>Admin Panel</button>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input type="text" placeholder="Search with AI..." className="bg-slate-100 border-none rounded-full px-4 py-2 text-sm w-48 focus:w-64 transition-all focus:ring-2 focus:ring-indigo-500 outline-none" />
              <div className="absolute right-3 top-2.5 text-slate-400">🔍</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center cursor-pointer hover:bg-white transition overflow-hidden">
               <img src="https://picsum.photos/seed/user/100/100" alt="Avatar" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Floating Chat Trigger (Storefront) */}
      {view === AppView.STOREFRONT && (
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-6 right-6 ai-gradient text-white p-4 rounded-full shadow-2xl hover:scale-110 transition group z-50"
        >
          <div className="flex items-center gap-2">
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold text-sm">
              Ask SURONEX AI
            </span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
          </div>
        </button>
      )}

      {/* AI Chat Drawer */}
      <AIChat 
        product={selectedProduct} 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-900 font-black text-xl">S</div>
              <h2 className="text-2xl font-bold tracking-tight">SURONEX AI</h2>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">Inspired by Suraj Sharma. The world's first complete AI Commerce Ecosystem where intelligence drives every transaction.</p>
            <div className="flex gap-4">
              {['FB', 'IG', 'TW', 'LI'].map(s => (
                <div key={s} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-600 transition cursor-pointer">{s}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-indigo-400">Platform</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => setView(AppView.STOREFRONT)} className="hover:text-white transition">Marketplace</button></li>
              <li><button onClick={() => setView(AppView.STUDIO)} className="hover:text-white transition">AI Content Studio</button></li>
              <li><button onClick={() => setView(AppView.ADMIN)} className="hover:text-white transition">Admin Panel</button></li>
              <li>Dropshipping API</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-indigo-400">Trust & Safety</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Verified Sellers</li>
              <li>AI Fraud Prevention</li>
              <li>7-Day Refund Policy</li>
              <li>Secure UPI Checkout</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-12 border-t border-white/5 text-center text-slate-500 text-xs">
          © 2024 SURONEX AI. All Rights Reserved. Designed by Suraj Sharma AI System.
        </div>
      </footer>
    </div>
  );
};

export default App;
