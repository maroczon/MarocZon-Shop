
import React from 'react';
import { useTranslation } from '../LanguageContext';

const FlashDeals: React.FC = () => {
  const { t } = useTranslation();

  const deals = [
    { name: 'Wireless Headphones', price: '$12.50', oldPrice: '$25.00', discount: '-50%', img: 'https://picsum.photos/200/200?random=101' },
    { name: 'Smart Watch Series 7', price: '$18.00', oldPrice: '$40.00', discount: '-55%', img: 'https://picsum.photos/200/200?random=102' },
    { name: 'USB-C Fast Charger', price: '$2.10', oldPrice: '$6.00', discount: '-65%', img: 'https://picsum.photos/200/200?random=103' },
    { name: 'Waterproof Backpack', price: '$8.40', oldPrice: '$20.00', discount: '-58%', img: 'https://picsum.photos/200/200?random=104' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mt-8">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-black italic tracking-tighter uppercase flex items-center gap-2">
              <i className="fa-solid fa-bolt-lightning"></i> {t.flashDeals}
            </h3>
            <div className="hidden sm:flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full text-xs font-bold">
              {t.ui.endsIn}: 04:22:15
            </div>
          </div>
          <a href="#" className="text-sm font-bold hover:underline">{t.viewAll} <i className="fa-solid fa-chevron-right ml-1"></i></a>
        </div>
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {deals.map((deal, idx) => (
            <div key={idx} className="flex gap-4 p-2 hover:bg-gray-50 rounded-xl transition cursor-pointer group">
              <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border">
                <img src={deal.img} className="w-full h-full object-cover group-hover:scale-110 transition" alt={deal.name} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-500 uppercase truncate w-24">{deal.name}</p>
                <div className="flex items-center gap-2 mt-1">
                   <span className="text-red-600 font-black">{deal.price}</span>
                   <span className="bg-red-50 text-red-600 text-[10px] font-bold px-1 rounded">{deal.discount}</span>
                </div>
                <p className="text-[10px] text-gray-400 line-through mt-0.5">{deal.oldPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
