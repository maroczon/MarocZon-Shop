
import React from 'react';
import { useTranslation } from '../LanguageContext';

const RFQSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 mt-12">
      <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-400 rounded-full blur-2xl"></div>
        </div>

        <div className="md:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
            {t.rfqTitle}
          </h2>
          <p className="text-blue-100 text-lg mb-8 opacity-80">
            {t.rfqSub}
          </p>
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <span className="text-white text-2xl font-bold">12k+</span>
              <span className="text-blue-200 text-xs">RFQ daily</span>
            </div>
            <div className="w-px h-10 bg-blue-700"></div>
            <div className="flex flex-col items-center">
              <span className="text-white text-2xl font-bold">3h</span>
              <span className="text-blue-200 text-xs">Avg. response</span>
            </div>
            <div className="w-px h-10 bg-blue-700"></div>
            <div className="flex flex-col items-center">
              <span className="text-white text-2xl font-bold">{t.suppliers}</span>
              <span className="text-blue-200 text-xs">Verified</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 w-full bg-white rounded-2xl p-6 shadow-xl relative z-10">
          <h3 className="font-bold text-gray-800 mb-4">{t.rfqFormTitle}</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-1">{t.rfqWhat}</label>
              <input 
                type="text" 
                placeholder={t.rfqPlaceholder}
                className="w-full px-4 py-3 rounded-xl border focus:border-alibaba-orange focus:ring-1 focus:ring-alibaba-orange outline-none transition"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">{t.rfqQty}</label>
                <input 
                  type="number" 
                  placeholder="e.g. 100" 
                  className="w-full px-4 py-3 rounded-xl border outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1">{t.rfqUnit}</label>
                <select className="w-full px-4 py-3 rounded-xl border outline-none bg-white">
                  <option>Pieces</option>
                  <option>Sets</option>
                  <option>Kilograms</option>
                  <option>Liters</option>
                </select>
              </div>
            </div>
            <button className="w-full bg-alibaba-orange text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition shadow-lg">
              {t.rfqPost}
            </button>
          </form>
          <p className="text-[10px] text-center text-gray-400 mt-4">
            Your privacy is protected. Suppliers only see what you share.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RFQSection;
