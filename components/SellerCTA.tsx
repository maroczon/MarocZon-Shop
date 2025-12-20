
import React from 'react';
import { useTranslation } from '../LanguageContext';

const SellerCTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-alibaba-orange text-white py-12 mt-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            {t.sellerCTA}
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-lg">
            {t.sellerSub}
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-circle-check mt-1 text-white"></i>
              <span>Zero upfront listing fees for the first 50 products.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-circle-check mt-1 text-white"></i>
              <span>Verified seller badges to boost buyer trust.</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-circle-check mt-1 text-white"></i>
              <span>Dedicated logistics and payment support.</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-alibaba-orange px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition">
              {t.registerSeller}
            </button>
            <button className="bg-transparent border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition">
              View Seller Guide
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
           <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white/20 rounded-full absolute -top-10 -right-10 blur-3xl animate-pulse"></div>
              <img 
                src="https://picsum.photos/600/600?random=20" 
                className="w-full max-w-md rounded-2xl shadow-2xl relative z-10 border-4 border-white/20" 
                alt="Seller Success"
              />
           </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-20 text-white/5 pointer-events-none">
        <i className="fa-solid fa-store text-[300px] rotate-12"></i>
      </div>
    </section>
  );
};

export default SellerCTA;
