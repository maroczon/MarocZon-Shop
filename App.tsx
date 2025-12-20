
import React from 'react';
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
import { MOCK_PRODUCTS } from './constants';
import { useTranslation } from './LanguageContext';

const App: React.FC = () => {
  const { t } = useTranslation();

  // Sorting and filtering logic
  const bestSellers = [...MOCK_PRODUCTS].sort((a, b) => b.salesCount - a.salesCount).slice(0, 10);
  
  // Categorized sections
  const apparelProducts = MOCK_PRODUCTS.filter(p => p.category === 'Apparel').slice(0, 10);
  const electronicsProducts = MOCK_PRODUCTS.filter(p => p.category === 'Consumer Electronics').slice(0, 10);
  const furnitureProducts = MOCK_PRODUCTS.filter(p => p.category === 'Home Furniture').slice(0, 10);
  const beautyProducts = MOCK_PRODUCTS.filter(p => p.category === 'Beauty & Personal Care').slice(0, 10);
  const sportsProducts = MOCK_PRODUCTS.filter(p => p.category === 'Sports & Activity').slice(0, 10);
  const gamesProducts = MOCK_PRODUCTS.filter(p => p.category === 'Games & Entertainment').slice(0, 10);
  const booksProducts = MOCK_PRODUCTS.filter(p => p.category === 'Books & Magazines').slice(0, 10);

  const ProductSection = ({ title, products, icon }: { title: string, products: any[], icon?: string }) => (
    <div className="max-w-7xl mx-auto px-4 mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-black text-gray-900 flex items-center gap-3">
          <span className="w-2 h-8 bg-alibaba-orange rounded-full"></span>
          {icon && <i className={`fa-solid ${icon} text-alibaba-orange mr-1`}></i>}
          {title}
        </h2>
        <a href="#" className="text-sm font-bold text-alibaba-orange hover:underline">{t.viewAll} <i className="fa-solid fa-chevron-right ml-1"></i></a>
      </div>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-6 scroll-smooth">
        {products.map(product => (
          <ProductCard key={product.id + '-' + title} product={product} />
        ))}
        {products.length >= 3 && (
          <div className="w-[180px] md:w-[220px] shrink-0 flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed rounded-lg text-gray-400 group cursor-pointer hover:border-alibaba-orange hover:text-alibaba-orange transition">
            <i className="fa-solid fa-circle-plus text-3xl mb-2 group-hover:scale-110 transition"></i>
            <span className="font-bold text-sm">{t.loadMore}</span>
          </div>
        )}
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
            <a href="#" className="text-sm font-bold text-alibaba-orange hover:underline">{t.viewRank} <i className="fa-solid fa-chevron-right ml-1"></i></a>
          </div>

          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-6 scroll-smooth">
            {bestSellers.map(product => (
              <ProductCard key={product.id + '-best'} product={product} />
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <Hero />

        {/* Category Specific Horizontal Rows */}
        <ProductSection 
          title={t.categories.apparel} 
          products={apparelProducts} 
          icon="fa-shirt" 
        />

        <ProductSection 
          title={t.categories.electronics} 
          products={electronicsProducts} 
          icon="fa-laptop" 
        />
        
        {/* Quick Actions */}
        <QuickActions />

        <ProductSection 
          title={t.categories.home} 
          products={furnitureProducts} 
          icon="fa-couch" 
        />

        <ProductSection 
          title={t.categories.beauty} 
          products={beautyProducts} 
          icon="fa-sparkles" 
        />

        {/* RFQ Center */}
        <RFQSection />

        <ProductSection 
          title={t.categories.sports} 
          products={sportsProducts} 
          icon="fa-basketball" 
        />

        <ProductSection 
          title={t.categories.games} 
          products={gamesProducts} 
          icon="fa-gamepad" 
        />

        {/* Flash Deals Section */}
        <FlashDeals />

        <ProductSection 
          title={t.categories.books} 
          products={booksProducts} 
          icon="fa-book" 
        />

        {/* Category Visual Grid */}
        <CategoryGrid />

        {/* Trusted Sellers Section */}
        <TrustedSellers />

        {/* Unique Value Proposition: Moroccan Specialty Products */}
        <MoroccanSpecialties />

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
    </div>
  );
};

export default App;
