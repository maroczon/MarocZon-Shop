
import React, { useState } from 'react';
import { useTranslation } from '../LanguageContext';
import { Language } from '../translations';

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'suppliers'>('products');
  const { lang, setLang, t } = useTranslation();
  const [showLangs, setShowLangs] = useState(false);

  const langNames = {
    ar: 'العربية',
    en: 'English',
    fr: 'Français',
    zh: '中文'
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs text-gray-500 hidden md:flex">
        <div className="flex gap-4">
          <a href="#" className="hover:text-alibaba-orange font-medium">{t.forBuyers} <i className="fa-solid fa-chevron-down text-[8px]"></i></a>
          <a href="#" className="hover:text-alibaba-orange font-medium">{t.forSuppliers} <i className="fa-solid fa-chevron-down text-[8px]"></i></a>
        </div>
        <div className="flex gap-4 items-center">
          <span className="cursor-pointer hover:text-alibaba-orange">{t.getApp}</span>
          <span className="text-gray-300">|</span>
          
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setShowLangs(!showLangs)}
              className="hover:text-alibaba-orange flex items-center gap-1 font-semibold"
            >
              <i className="fa-solid fa-globe"></i> {langNames[lang]} <i className="fa-solid fa-chevron-down text-[8px]"></i>
            </button>
            {showLangs && (
              <div className="absolute top-full mt-2 right-0 bg-white border rounded-lg shadow-xl py-2 z-[60] min-w-[120px]">
                {(Object.keys(langNames) as Language[]).map(l => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setShowLangs(false); }}
                    className={`block w-full text-right px-4 py-2 hover:bg-gray-50 text-sm ${lang === l ? 'text-alibaba-orange font-bold' : 'text-gray-700'}`}
                  >
                    {langNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-2 ml-2">
            <button className="hover:text-alibaba-orange font-semibold">{t.signIn}</button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-alibaba-orange font-semibold">{t.joinFree}</button>
          </div>
        </div>
      </div>

      {/* Main Search Bar Section */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center gap-4">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
          <span className="text-3xl font-black bg-alibaba-orange text-white px-2 rounded-lg tracking-tighter shadow-sm">M</span>
          <span className="text-2xl font-bold tracking-tight text-gray-900">{t.name}</span>
        </div>

        {/* Search Container */}
        <div className="flex-grow w-full max-w-3xl relative">
          <div className="flex border-2 border-alibaba-orange rounded-full overflow-hidden bg-white shadow-sm">
            <div className="hidden sm:flex items-center px-5 bg-gray-50 border-r text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100">
              {activeTab === 'products' ? t.allProducts : t.suppliers}
              <i className="fa-solid fa-chevron-down mx-2 text-[10px]"></i>
            </div>
            <input 
              type="text" 
              placeholder={t.searchPlaceholder}
              className="flex-grow px-5 py-2.5 focus:outline-none text-gray-700 text-sm"
            />
            <div className="flex items-center px-3 text-gray-400 border-l cursor-pointer hover:text-alibaba-orange">
              <i className="fa-solid fa-camera text-lg"></i>
            </div>
            <button className="bg-alibaba-orange text-white px-8 py-2.5 flex items-center gap-2 hover:bg-orange-600 transition font-bold">
              <i className="fa-solid fa-magnifying-glass"></i>
              <span className="hidden sm:inline">{t.searchBtn}</span>
            </button>
          </div>
        </div>

        {/* Action Icons */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="text-center cursor-pointer hover:text-alibaba-orange group">
            <i className="fa-solid fa-comment-dots text-xl group-hover:scale-110 transition"></i>
            <p className="text-[10px] mt-1 font-semibold">{t.messages}</p>
          </div>
          <div className="text-center cursor-pointer hover:text-alibaba-orange group">
            <i className="fa-solid fa-cart-shopping text-xl group-hover:scale-110 transition"></i>
            <p className="text-[10px] mt-1 font-semibold">{t.cart}</p>
          </div>
          <div className="text-center cursor-pointer hover:text-alibaba-orange group">
            <i className="fa-solid fa-user text-xl group-hover:scale-110 transition"></i>
            <p className="text-[10px] mt-1 font-semibold">{t.myAccount}</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav Tabs */}
      <div className="bg-gray-50/50 border-t">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-8 py-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 font-bold text-gray-900 cursor-pointer whitespace-nowrap hover:text-alibaba-orange">
            <i className="fa-solid fa-bars"></i>
            {t.allCategories}
          </div>
          <div className="flex gap-8 text-[13px] text-gray-700 whitespace-nowrap font-medium">
            <a href="#" className="hover:text-alibaba-orange">{t.readyToShip}</a>
            <a href="#" className="hover:text-alibaba-orange">{t.ppe}</a>
            <a href="#" className="hover:text-alibaba-orange">{t.tradeAssurance}</a>
            <a href="#" className="hover:text-alibaba-orange">{t.marocZonSelect}</a>
            <a href="#" className="hover:text-alibaba-orange border-l pr-8">{t.suppliers}</a>
            <a href="#" className="hover:text-alibaba-orange">{t.worldwide}</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
