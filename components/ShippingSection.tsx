
import React from 'react';
import { useTranslation } from '../LanguageContext';

const ShippingSection: React.FC = () => {
  const { t } = useTranslation();

  const logisticsPartners = [
    { name: 'Royal Air Maroc Cargo', icon: 'fa-plane-departure', description: 'Air freight across 3 continents' },
    { name: 'Tanger Med Logistics', icon: 'fa-ship', description: 'Mediterranean sea port hub' },
    { name: 'Aramex Morocco', icon: 'fa-truck-fast', description: 'Last-mile delivery experts' },
    { name: 'DHL Global Forwarding', icon: 'fa-globe', description: 'Door-to-door international' },
  ];

  const shippingStats = [
    { label: 'Orders Shipped', value: '250K+', icon: 'fa-box' },
    { label: 'Avg. Delivery', value: '3-5 Days', icon: 'fa-clock' },
    { label: 'Destinations', value: '190+', icon: 'fa-earth-africa' },
    { label: 'Tracking rate', value: '99.9%', icon: 'fa-location-dot' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mt-12">
      <div className="bg-white rounded-3xl overflow-hidden border shadow-sm">
        <div className="bg-blue-600 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">
              <i className="fa-solid fa-truck-ramp-box"></i>
            </div>
            <div>
              <h3 className="text-2xl font-black">{t.readyToShip}</h3>
              <p className="text-blue-100 opacity-80 text-sm">Efficient logistics solutions from Morocco to the world.</p>
            </div>
          </div>
          <div className="flex gap-4">
             <div className="bg-white/10 px-6 py-3 rounded-xl border border-white/20 backdrop-blur-sm">
                <p className="text-[10px] uppercase font-bold text-blue-200">Track Order</p>
                <div className="flex items-center gap-2 mt-1">
                   <input 
                    type="text" 
                    placeholder="MZ-XXXXXXXX" 
                    className="bg-transparent text-sm font-bold outline-none placeholder:text-white/40 w-24 md:w-32"
                   />
                   <i className="fa-solid fa-chevron-right text-xs cursor-pointer hover:translate-x-1 transition"></i>
                </div>
             </div>
          </div>
        </div>

        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Stats Column */}
          <div className="md:col-span-1 space-y-6">
            <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Logistics Performance</h4>
            <div className="grid grid-cols-2 gap-4">
              {shippingStats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-black text-blue-600">{stat.value}</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Grid */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {logisticsPartners.map((partner, i) => (
              <div key={i} className="p-4 rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-md transition cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-lg mb-3 group-hover:bg-blue-600 group-hover:text-white transition">
                  <i className={`fa-solid ${partner.icon}`}></i>
                </div>
                <h5 className="font-bold text-xs text-gray-800 mb-1">{partner.name}</h5>
                <p className="text-[10px] text-gray-500 leading-tight">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 px-8 py-4 border-t flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><i className="fa-solid fa-check text-green-500"></i> Real-time tracking</span>
            <span className="flex items-center gap-1"><i className="fa-solid fa-check text-green-500"></i> Customs clearance support</span>
            <span className="flex items-center gap-1"><i className="fa-solid fa-check text-green-500"></i> Marine insurance</span>
          </div>
          <button className="text-blue-600 font-bold hover:underline flex items-center gap-1">
            Learn about Shipping Methods <i className="fa-solid fa-arrow-right-long ml-1"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;
