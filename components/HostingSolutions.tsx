
import React from 'react';
import { useTranslation } from '../LanguageContext';

const HostingSolutions: React.FC = () => {
  const { t } = useTranslation();

  const hostingPlans = [
    {
      id: 'free',
      name: t.plans.free,
      price: '0',
      period: '/mo',
      color: 'bg-gray-100',
      textColor: 'text-gray-900',
      btnColor: 'bg-gray-900',
      features: [
        'Up to 50 Products',
        'Standard Storefront',
        'MarocZon.com/your-store',
        'Email Support',
        'Basic Analytics'
      ],
      recommended: false
    },
    {
      id: 'pro',
      name: t.plans.pro,
      price: '29',
      period: '/mo',
      color: 'bg-alibaba-orange',
      textColor: 'text-white',
      btnColor: 'bg-white text-alibaba-orange',
      features: [
        'Unlimited Products',
        'Custom Design Themes',
        'Custom Domain Support',
        'Priority 24/7 Support',
        'Advanced Sales CRM',
        'Verified Seller Badge'
      ],
      recommended: true
    },
    {
      id: 'enterprise',
      name: t.plans.enterprise,
      price: '99',
      period: '/mo',
      color: 'bg-blue-900',
      textColor: 'text-white',
      btnColor: 'bg-white text-blue-900',
      features: [
        'Multiple Staff Accounts',
        'Global Logistics API',
        'Dedicated Account Manager',
        'Wholesale Bulk Invoicing',
        'Marketing Ad Credits',
        'White-label Solution'
      ],
      recommended: false
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mt-20 mb-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{t.hostingTitle}</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">{t.hostingSub}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hostingPlans.map((plan) => (
          <div 
            key={plan.id}
            className={`rounded-3xl p-8 border flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${plan.color} ${plan.textColor}`}
          >
            {plan.recommended && (
              <div className="absolute top-4 right-4 bg-white text-alibaba-orange text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-sm">
                Most Popular
              </div>
            )}
            
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black">${plan.price}</span>
              <span className="opacity-70 text-sm font-bold">{plan.period}</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                  <i className={`fa-solid fa-circle-check ${plan.id === 'free' ? 'text-green-500' : 'text-white/80'}`}></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-2xl font-black text-sm transition-all shadow-lg active:scale-95 ${plan.btnColor} ${plan.id === 'free' ? 'text-white' : ''}`}>
              {plan.id === 'free' ? t.plans.startNow : t.plans.upgrade}
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-gray-50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl text-alibaba-orange shadow-sm border border-gray-100">
            <i className="fa-solid fa-headset"></i>
          </div>
          <div>
            <h4 className="font-black text-gray-900">Need a custom solution for your factory?</h4>
            <p className="text-sm text-gray-500">Our enterprise consultants can help you digitize your production line.</p>
          </div>
        </div>
        <button className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-full font-bold hover:border-alibaba-orange hover:text-alibaba-orange transition">
          Talk to Sales
        </button>
      </div>
    </section>
  );
};

export default HostingSolutions;
