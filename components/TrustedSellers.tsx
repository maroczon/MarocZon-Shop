
import React from 'react';
import { useTranslation } from '../LanguageContext';

const TrustedSellers: React.FC = () => {
  const { t } = useTranslation();

  const sellers = [
    { name: 'Atlas Textile Factory', type: 'Manufacturer', rating: '4.9', years: `12 ${t.ui.yrs}`, img: 'https://picsum.photos/400/200?random=201' },
    { name: 'Marrakech Craft Co.', type: 'Trading Company', rating: '4.8', years: `8 ${t.ui.yrs}`, img: 'https://picsum.photos/400/200?random=202' },
    { name: 'Casablanca Tech Ltd', type: 'OEM/ODM', rating: '5.0', years: `15 ${t.ui.yrs}`, img: 'https://picsum.photos/400/200?random=203' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">{t.discoverTrusted}</h3>
        <a href="#" className="text-sm font-semibold text-alibaba-orange hover:underline">{t.viewAll}</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sellers.map((seller, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition cursor-pointer flex flex-col">
            <div className="h-32 bg-gray-200 overflow-hidden relative">
              <img src={seller.img} className="w-full h-full object-cover" alt={seller.name} />
              <div className="absolute top-2 right-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded-md backdrop-blur-sm">
                 {seller.years}
              </div>
            </div>
            <div className="p-4 flex-grow">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-gray-800 hover:text-alibaba-orange">{seller.name}</h4>
                <div className="flex items-center gap-1 text-orange-400 text-xs">
                   <i className="fa-solid fa-star"></i> {seller.rating}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{seller.type}</p>
              <div className="mt-4 flex gap-2">
                <div className="w-1/2 h-16 bg-gray-50 rounded-lg overflow-hidden border">
                   <img src={`https://picsum.photos/100/100?random=${idx + 40}`} className="w-full h-full object-cover" alt="product1" />
                </div>
                <div className="w-1/2 h-16 bg-gray-50 rounded-lg overflow-hidden border">
                   <img src={`https://picsum.photos/100/100?random=${idx + 50}`} className="w-full h-full object-cover" alt="product2" />
                </div>
              </div>
            </div>
            <div className="px-4 pb-4">
              <button className="w-full border-2 border-gray-100 py-2 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 transition">
                {t.ui.follow}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedSellers;
