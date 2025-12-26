
import React, { useState } from 'react';
import { useTranslation } from '../LanguageContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const ActivationModal: React.FC<Props> = ({ isOpen, onClose, onSuccess }) => {
  const { t, lang } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    phone: '',
    businessName: ''
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else {
      onSuccess();
      onClose();
    }
  };

  const steps = [
    { id: 1, label: t.stepEmail, icon: 'fa-envelope' },
    { id: 2, label: t.stepPhone, icon: 'fa-phone' },
    { id: 3, label: t.stepBusiness, icon: 'fa-building' }
  ];

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-alibaba-orange p-6 text-white text-center">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
            <i className="fa-solid fa-user-shield"></i>
          </div>
          <h2 className="text-xl font-black">{t.activateAccount}</h2>
          <p className="text-sm opacity-80 mt-1">{t.activationSub}</p>
        </div>

        {/* Stepper */}
        <div className="flex justify-around p-6 border-b bg-gray-50">
          {steps.map((s) => (
            <div key={s.id} className="flex flex-col items-center gap-1 group">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step >= s.id ? 'bg-alibaba-orange text-white shadow-md scale-110' : 'bg-gray-200 text-gray-400'}`}>
                {step > s.id ? <i className="fa-solid fa-check"></i> : <i className={`fa-solid ${s.icon}`}></i>}
              </div>
              <span className={`text-[10px] font-bold ${step >= s.id ? 'text-alibaba-orange' : 'text-gray-400'}`}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className="p-8">
          {step === 1 && (
            <div className="space-y-4 animate-in slide-in-from-right duration-300">
              <label className="block">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}</span>
                <input 
                  type="email" 
                  className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-alibaba-orange outline-none"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </label>
              <p className="text-[10px] text-gray-400">We'll send a verification link to this email.</p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in slide-in-from-right duration-300">
              <label className="block">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{lang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}</span>
                <div className="flex gap-2 mt-1">
                  <div className="px-3 py-3 border rounded-xl bg-gray-50 text-sm font-bold text-gray-500">+212</div>
                  <input 
                    type="tel" 
                    className="flex-grow px-4 py-3 rounded-xl border border-gray-200 focus:border-alibaba-orange outline-none"
                    placeholder="6XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </label>
              <button className="text-xs font-bold text-alibaba-orange hover:underline">Send SMS Code</button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-in slide-in-from-right duration-300">
              <label className="block">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{lang === 'ar' ? 'اسم العمل/الشركة' : 'Business Name'}</span>
                <input 
                  type="text" 
                  className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-alibaba-orange outline-none"
                  placeholder="e.g. Atlas Textiles SARL"
                  value={formData.businessName}
                  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                />
              </label>
              <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 flex items-start gap-3">
                <i className="fa-solid fa-circle-info text-alibaba-orange mt-1"></i>
                <p className="text-[10px] text-gray-600">This info will be used for your public profile. You can upload documents later.</p>
              </div>
            </div>
          )}

          <button 
            onClick={handleNext}
            className="w-full mt-8 bg-alibaba-orange text-white py-4 rounded-2xl font-black shadow-lg hover:shadow-orange-200 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            {step === 3 ? t.verifyNow : (lang === 'ar' ? 'التالي' : 'Next Step')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivationModal;
