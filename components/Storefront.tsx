
import React from 'react';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Heritage Cotton Kurta',
    price: 1899,
    image: 'https://picsum.photos/seed/kurta/600/800',
    category: 'Men Fashion',
    description: 'Premium cotton blend with intricate embroidery. Perfect for festivals.',
    rating: 4.8,
    stock: 12,
    isAiPicked: true
  },
  {
    id: '2',
    name: 'Suronex Pro Smartwatch',
    price: 3499,
    image: 'https://picsum.photos/seed/watch/600/800',
    category: 'Electronics',
    description: 'AI-integrated health tracking and 14-day battery life.',
    rating: 4.9,
    stock: 5,
    isAiPicked: true
  },
  {
    id: '3',
    name: 'Indo-Western Fusion Saree',
    price: 4999,
    image: 'https://picsum.photos/seed/saree/600/800',
    category: 'Women Fashion',
    description: 'Modern silhouette with traditional hand-woven patterns.',
    rating: 4.7,
    stock: 20
  },
  {
    id: '4',
    name: 'Urban Leather Messenger Bag',
    price: 2299,
    image: 'https://picsum.photos/seed/bag/600/800',
    category: 'Accessories',
    description: 'Crafted from genuine top-grain leather. Business professional look.',
    rating: 4.6,
    stock: 8
  }
];

interface StorefrontProps {
  onSelectProduct: (p: Product) => void;
}

const Storefront: React.FC<StorefrontProps> = ({ onSelectProduct }) => {
  return (
    <div className="pb-20">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 ai-gradient opacity-90 z-10"></div>
        <img src="https://picsum.photos/seed/fashion/1920/1080" alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4 text-center">
          <span className="bg-white/20 px-4 py-1 rounded-full text-xs font-bold mb-4 backdrop-blur-md uppercase tracking-[0.2em]">Festival Collection Live</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">SURONEX AI LUXE</h1>
          <p className="text-lg opacity-80 max-w-xl">Curated by AI. Designed for Elegance. Delivered in 48 Hours.</p>
          <div className="mt-8 flex gap-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition shadow-xl">Shop Collection</button>
            <button className="bg-indigo-900/40 border border-white/30 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-900/60 transition backdrop-blur-md">Explore AI Studio</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar">
          {['All Items', 'Men', 'Women', 'Electronics', 'Footwear', 'Festive Special'].map((cat, idx) => (
            <button 
              key={idx} 
              className={`px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition
                ${idx === 0 ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-indigo-500'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {PRODUCTS.map((p) => (
            <div 
              key={p.id} 
              onClick={() => onSelectProduct(p)}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                {p.isAiPicked && (
                  <div className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg flex items-center gap-1">
                    <span className="animate-pulse">✨</span> AI PICKED
                  </div>
                )}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
              </div>
              <div className="p-4">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{p.category}</p>
                <h3 className="font-bold text-slate-800 line-clamp-1 mt-1 group-hover:text-indigo-600 transition">{p.name}</h3>
                <div className="flex justify-between items-center mt-3">
                  <p className="font-bold text-lg text-slate-900">₹{p.price}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-amber-500">★</span>
                    <span className="text-xs font-bold text-slate-500">{p.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Storefront;
