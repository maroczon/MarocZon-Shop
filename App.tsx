import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import FlashDeals from './components/FlashDeals';
import TrustedSellers from './components/TrustedSellers';
import ProductCard from './components/ProductCard';
import SellerCTA from './components/SellerCTA';
import Footer from './components/Footer';
import CategoryGrid from './components/CategoryGrid';
import RFQSection from './components/RFQSection';
import MoroccanSpecialties from './components/MoroccanSpecialties';
import ShippingSection from './components/ShippingSection';
import ProductDetailModal from './components/ProductDetailModal';
import HostingSolutions from './components/HostingSolutions';
import { MOCK_PRODUCTS } from './constants';
import { useTranslation } from './LanguageContext';
import { Product } from './types';

const App: React.FC = () => {
  const { t, lang } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Persistent Wishlist State
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('maroczon_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('maroczon_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  // Category Filtered Products
  const categoriesList = [
    { id: 'apparel', title: t.categories.apparel, icon: 'fa-shirt', color: 'bg-indigo-600', products: MOCK_PRODUCTS.filter(p => p.category === 'Apparel').slice(0, 8) },
    { id: 'electronics', title: t.categories.electronics, icon: 'fa-laptop', color: 'bg-blue-600', products: MOCK_PRODUCTS.filter(p => p.category === 'Consumer Electronics').slice(0, 8) },
    { id: 'home', title: t.categories.home, icon: 'fa-couch', color: 'bg-amber-600', products: MOCK_PRODUCTS.filter(p => p.category === 'Home Furniture').slice(0, 8) },
    { id: 'beauty', title: t.categories.beauty, icon: 'fa-sparkles', color: 'bg-rose-500', products: MOCK_PRODUCTS.filter(p => p.category === 'Beauty & Personal Care').slice(0, 8) },
    { id: 'sports', title: t.categories.sports, icon: 'fa-basketball', color: 'bg-emerald-600', products: MOCK_PRODUCTS.filter(p => p.category === 'Sports & Activity').slice(0, 8) },
    { id: 'games', title: t.categories.games, icon: 'fa-gamepad', color: 'bg-purple-600', products: MOCK_PRODUCTS.filter(p => p.category === 'Games & Entertainment').slice(0, 8) },
    { id: 'books', title: t.categories.books, icon: 'fa-book', color: 'bg-cyan-600', products: MOCK_PRODUCTS.filter(p => p.category === 'Books & Magazines').slice(0, 8) },
  ];

  const bestSellers = [...MOCK_PRODUCTS].sort((a, b) => b.salesCount - a.salesCount).slice(0, 10);
  const readyToShipProducts = [...MOCK_PRODUCTS].filter(p => p.salesCount > 1000).slice(0, 10);

  // Added key and updated title type to resolve assignment errors when mapped in JSX
  const ProductSection = ({ title, products, icon, color, categoryId }: { title: any, products: any[], icon?: string, color?: string, categoryId?: string, key?: React.Key }) => (
    <div className="max-w-7xl mx-auto px-4 mt-12">
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        {/* Section Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 flex items-center gap-3">
            <div className={`w-10 h-10 ${color || 'bg-alibaba-orange'} rounded-xl flex items-center justify-center text-white shadow-sm`}>
              {icon && <i className={`fa-solid ${icon}`}></i>}
            </div>
            {title}
          </h2>
          <a href="#" className="text-sm font-bold text-alibaba-orange hover:underline flex items-center gap-1">
            {t.viewAll} <i className={`fa-solid fa-chevron-${lang === 'ar' ? 'left' : 'right'} text-[10px]`}></i>
          </a>
        </div>

        {/* Horizontal Row Content */}
        <div className="flex p-4 md:p-6 gap-6 overflow-x-auto no-scrollbar scroll-smooth">
          {/* Leading Highlight Card (Alibaba Style) */}
          <div className={`hidden md:flex w-[200px] shrink-0 flex-col rounded-xl p-5 ${color || 'bg-alibaba-orange'} text-white relative overflow-hidden group cursor-pointer`}>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition duration-500">
               <i className={`fa-solid ${icon} text-[120px]`}></i>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">{t.sourceByCategory}</p>
            <h3 className="text-lg font-black leading-tight mb-4">{title}</h3>
            <button className="mt-auto bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold py-2 px-4 rounded-full self-start hover:bg-white/40 transition">
              {t.startSourcing}
            </button>
          </div>

          {/* Products List */}
          {products.map(product => (
            <ProductCard 
              key={product.id + '-' + categoryId} 
              product={product} 
              onClick={() => setSelectedProduct(product)}
            />
          ))}
          
          {/* See More Card */}
          {products.length >= 3 && (
            <div className="w-[180px] md:w-[220px] shrink-0 flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed rounded-xl text-gray-400 group cursor-pointer hover:border-alibaba-orange hover:text-alibaba-orange transition">
              <i className="fa-solid fa-circle-plus text-3xl mb-2 group-hover:scale-110 transition"></i>
              <span className="font-bold text-sm">{t.loadMore}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-gray-900 overflow-x-hidden pb-12">
      <Header />
      
      <main>
        {/* Top Section: Best Sellers */}
        <div className="max-w-7xl mx-auto px-4 mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
              <span className="w-2 h-8 bg-red-600 rounded-full"></span>
              {t.bestSellers}
              <span className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded-full font-bold ml-2">{t.hot}</span>
            </h2>
            <a href="#" className="text-sm font-bold text-alibaba-orange hover:underline">{t.viewRank} <i className={`fa-solid fa-chevron-${lang === 'ar' ? 'left' : 'right'} ml-1`}></i></a>
          </div>

          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-6 scroll-smooth">
            {bestSellers.map(product => (
              <ProductCard 
                key={product.id + '-best'} 
                product={product} 
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <Hero />

        {/* Quick Actions Navigation Row */}
        <QuickActions />

        {/* Ready to Ship (Standard Alibaba Section) */}
        <div className="max-w-7xl mx-auto px-4 mt-12">
           <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                 <i className="fa-solid fa-box-open text-alibaba-orange"></i>
                 {t.readyToShip}
              </h3>
              <a href="#" className="text-sm font-bold text-alibaba-orange hover:underline">{t.viewAll}</a>
           </div>
           <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {readyToShipProducts.map(p => (
                <ProductCard key={p.id + '-ready'} product={p} onClick={() => setSelectedProduct(p)} />
              ))}
           </div>
        </div>

        {/* Category Rows Section (Requested: Apparel, Electronics, Home, Beauty, Sports, Games, Books) */}
        {categoriesList.map(cat => (
          <ProductSection 
            key={cat.id}
            title={cat.title}
            products={cat.products}
            icon={cat.icon}
            color={cat.color}
            categoryId={cat.id}
          />
        ))}

        {/* RFQ Center - Demand Generation */}
        <RFQSection />

        {/* Flash Deals Section */}
        <FlashDeals />

        {/* Shipping & Logistics Section */}
        <ShippingSection />

        {/* Category Visual Grid - Exploration */}
        <CategoryGrid />

        {/* Trusted Sellers Section */}
        <TrustedSellers />

        {/* Unique Value Proposition: Moroccan Specialty Products */}
        <MoroccanSpecialties />

        {/* Store Hosting Solutions for Sellers */}
        <HostingSolutions />

        {/* Browsing History Simulation */}
        <div className="max-w-7xl mx-auto px-4 mt-16 pb-8 border-t pt-8">
           <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{t.browsingHistory}</h3>
           <div className="flex gap-4 overflow-x-auto no-scrollbar">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-24 h-24 bg-white rounded-xl border shrink-0 overflow-hidden hover:border-alibaba-orange transition cursor-pointer">
                   <img src={`https://picsum.photos/100/100?random=${i + 100}`} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition" alt="history" />
                </div>
              ))}
           </div>
        </div>

        {/* Seller Recruitment Section */}
        <SellerCTA />

        {/* Features Info Section */}
        <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border shadow-sm">
              <div className="w-12 h-12 bg-orange-50 text-alibaba-orange rounded-full flex items-center justify-center text-xl shrink-0">
                 <i className="fa-solid fa-shield-halved"></i>
              </div>
              <div>
                 <h4 className="font-bold text-sm">{t.tradeAssurance}</h4>
                 <p className="text-xs text-gray-500 mt-1">Order protection from payment to delivery.</p>
              </div>
           </div>
           <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl shrink-0">
                 <i className="fa-solid fa-wallet"></i>
              </div>
              <div>
                 <h4 className="font-bold text-sm">{t.flexiblePayment}</h4>
                 <p className="text-xs text-gray-500 mt-1">{t.paymentSub}</p>
              </div>
           </div>
           <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border shadow-sm">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center text-xl shrink-0">
                 <i className="fa-solid fa-headset"></i>
              </div>
              <div>
                 <h4 className="font-bold text-sm">{t.support247}</h4>
                 <p className="text-xs text-gray-500 mt-1">{t.supportSub}</p>
              </div>
           </div>
        </div>
      </main>

      <Footer />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          isWishlisted={wishlist.includes(selectedProduct.id)}
          onToggleWishlist={toggleWishlist}
        />
      )}
    </div>
  );
};

export default App;