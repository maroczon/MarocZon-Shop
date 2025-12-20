
import React from 'react';
import { useTranslation } from '../LanguageContext';

const MoroccanSpecialties: React.FC = () => {
  const { t } = useTranslation();

  const specialties = [
    { name: 'Traditional Kaftans', img: 'https://picsum.photos/400/500?random=401', tag: 'Handmade' },
    { name: 'Premium Argan Oil', img: 'https://picsum.photos/400/500?random=402', tag: 'Natural' },
    { name: 'Leather Goods', img: 'https://picsum.photos/400/500?random=403', tag: 'Authentic' },
    { name: 'Ceramic Pottery', img: 'https://picsum.photos/400/500?random=404', tag: 'Traditional' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mt-16">
      <div className="bg-emerald-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Islamic pattern overlay effect could be done here with SVG if needed */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <i className="fa-solid fa-mosque text-[400px] absolute -right-20 -top-20"></i>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 text-white">
            <div className="w-16 h-1 w-white bg-white mb-6"></div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 italic">{t.moroccanSpecialties}</h2>
            <p className="text-emerald-100 text-lg opacity-80 mb-8">
              Discover authentic products directly from the heart of Morocco. Handcrafted quality and centuries of heritage delivered to your business.
            </p>
            <button className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold shadow-xl hover:bg-emerald-50 transition">
              {t.ui.exploreHeritage}
            </button>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {specialties.map((item, idx) => (
              <div key={idx} className="bg-white/10 rounded-2xl overflow-hidden backdrop-blur-md border border-white/20 group cursor-pointer">
                <div className="h-48 md:h-64 overflow-hidden relative">
                   <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={item.name} />
                   <div className="absolute top-2 left-2 bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-widest">
                      {item.tag}
                   </div>
                </div>
                <div className="p-4">
                   <h4 className="text-white font-bold text-sm md:text-base group-hover:text-emerald-300 transition">{item.name}</h4>
                   <p className="text-emerald-200 text-xs mt-1">{t.ui.sourcedFrom}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoroccanSpecialties;
