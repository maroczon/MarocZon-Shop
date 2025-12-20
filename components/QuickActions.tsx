
import React from 'react';
import { useTranslation } from '../LanguageContext';

const QuickActions: React.FC = () => {
  const { t } = useTranslation();

  const actions = [
    { name: t.sourceByCategory, icon: 'fa-layer-group', color: 'text-orange-500', bg: 'bg-orange-50' },
    { name: t.rfqFormTitle, icon: 'fa-file-invoice-dollar', color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: t.verifiedSellers, icon: 'fa-shield-halved', color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { name: t.suppliers, icon: 'fa-location-dot', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { name: t.marocZonSelect, icon: 'fa-gem', color: 'text-purple-500', bg: 'bg-purple-50' },
    { name: t.fastShipping, icon: 'fa-truck-fast', color: 'text-rose-500', bg: 'bg-rose-50' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      <div className="bg-white rounded-2xl p-6 shadow-sm border grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {actions.map((action, idx) => (
          <div key={idx} className="flex flex-col items-center text-center cursor-pointer group">
            <div className={`w-14 h-14 ${action.bg} ${action.color} rounded-2xl flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition shadow-sm`}>
              <i className={`fa-solid ${action.icon}`}></i>
            </div>
            <span className="text-xs font-bold text-gray-700 group-hover:text-alibaba-orange">{action.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
