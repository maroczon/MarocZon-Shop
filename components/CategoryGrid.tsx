
import React from 'react';
import { useTranslation } from '../LanguageContext';

const CategoryGrid: React.FC = () => {
  const { t } = useTranslation();

  const categories = [
    { name: t.categories.electronics, img: 'https://picsum.photos/300/300?random=301', items: '20k+ Products' },
    { name: t.categories.apparel, img: 'https://picsum.photos/300/300?random=302', items: '15k+ Products' },
    { name: t.categories.home, img: 'https://picsum.photos/300/300?random=303', items: '10k+ Products' },
    { name: t.categories.beauty, img: 'https://picsum.photos/300/300?random=304', items: '8k+ Products' },
    { name: t.categories.sports, img: 'https://picsum.photos/300/300?random=305', items: '5k+ Products' },
    { name: t.categories.tools, img: 'https://picsum.photos/300/300?random=306', items: '12k+ Products' },
    { name: t.categories.machinery, img: 'https://picsum.photos/300/300?random=307', items: '7k+ Products' },
    { name: t.categories.packaging, img: 'https://picsum.photos/300/300?random=308', items: '4k+ Products' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mt-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <i className="fa-solid fa-layer-group text-alibaba-orange"></i>
          {t.sourceByCategory}
        </h3>
        <a href="#" className="text-sm font-semibold text-alibaba-orange hover:underline">{t.allCategories}</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition cursor-pointer group flex flex-col sm:flex-row items-center p-4 gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
              <img src={cat.img} className="w-full h-full object-cover group-hover:scale-110 transition" alt={cat.name} />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-sm text-gray-800 line-clamp-1">{cat.name}</h4>
              <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-wider">{cat.items}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
