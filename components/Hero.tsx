
import React from 'react';
import { CATEGORIES } from '../constants';
import { useTranslation } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 mt-6 flex flex-col lg:flex-row gap-4">
      {/* Category Sidebar */}
      <div className="hidden lg:block w-64 bg-white border rounded-lg p-4 shrink-0 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">{t.allCategories}</h3>
        <ul className="space-y-3">
          {CATEGORIES.map(cat => (
            <li key={cat.id} className="flex items-center justify-between text-sm text-gray-600 hover:text-alibaba-orange cursor-pointer group">
              <div className="flex items-center gap-3">
                <i className={`fa-solid ${cat.icon} w-5 text-gray-400 group-hover:text-alibaba-orange`}></i>
                {cat.name}
              </div>
              <i className="fa-solid fa-chevron-right text-[10px]"></i>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Banner Area */}
      <div className="flex-grow">
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-gradient-to-r from-orange-400 to-orange-600 shadow-md">
          <img 
            src="https://picsum.photos/1200/400?random=10" 
            className="w-full h-full object-cover opacity-80 mix-blend-overlay" 
            alt="Marketplace Banner" 
          />
          <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md leading-tight">{t.heroTitle}</h1>
            <p className="text-lg md:text-xl mb-6 opacity-90">{t.heroSub}</p>
            <div className="flex gap-4">
              <button className="bg-white text-alibaba-orange px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition">
                {t.startSourcing}
              </button>
              <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-alibaba-orange transition">
                {t.sellOnMarocZon}
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-alibaba-orange">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <div>
              <p className="font-bold text-sm">{t.flashDeals}</p>
              <p className="text-xs text-gray-500">{t.upTo70}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <p className="font-bold text-sm">{t.verifiedSellers}</p>
              <p className="text-xs text-gray-500">Shop with trust</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <i className="fa-solid fa-truck-fast"></i>
            </div>
            <div>
              <p className="font-bold text-sm">{t.fastShipping}</p>
              <p className="text-xs text-gray-500">Global logistics</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              <i className="fa-solid fa-file-invoice-dollar"></i>
            </div>
            <div>
              <p className="font-bold text-sm">{t.rfqCenter}</p>
              <p className="text-xs text-gray-500">Request quotation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
