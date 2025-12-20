
import React from 'react';
import { useTranslation } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white pt-16 pb-24 md:pb-8 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div>
          <h4 className="font-bold text-gray-800 mb-4">{t.helpCenter}</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-alibaba-orange">{t.helpCenter}</a></li>
            <li><a href="#" className="hover:text-alibaba-orange">{t.contactUs}</a></li>
            <li><a href="#" className="hover:text-alibaba-orange">{t.ui.reportAbuse}</a></li>
            <li><a href="#" className="hover:text-alibaba-orange">{t.ui.dispute}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-4">{t.ui.shoppingWithUs}</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-alibaba-orange">Making Payments</a></li>
            <li><a href="#" className="hover:text-alibaba-orange">Delivery Options</a></li>
            <li><a href="#" className="hover:text-alibaba-orange">{t.tradeAssurance}</a></li>
            <li><a href="#" className="hover:text-alibaba-orange">{t.marocZonSelect}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-4">{t.sellOnMarocZon}</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-alibaba-orange">Supplier Memberships</a></li>
            <li><a href="#" className="hover:text-alibaba-orange">Learning Center</a></li>
            <li><a href="#" className="hover:text-alibaba-orange">Partner Program</a></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-bold text-gray-800 mb-4">{t.ui.stayConnected}</h4>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-blue-600 text-xl"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="hover:text-pink-600 text-xl"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="hover:text-blue-400 text-xl"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="hover:text-red-600 text-xl"><i className="fa-brands fa-youtube"></i></a>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-2">{t.ui.newsletter}</p>
            <div className="flex rounded-lg overflow-hidden border">
              <input type="email" placeholder="Email" className="px-3 py-2 text-xs flex-grow focus:outline-none" />
              <button className="bg-alibaba-orange text-white px-4 py-2 text-xs font-bold">{t.ui.join}</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t text-center text-xs text-gray-400">
        <p>{t.copyright}</p>
        <p className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </p>
      </div>

      {/* Mobile Bottom Navigation Bar (Alibaba Style) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex items-center justify-around py-2 md:hidden z-50 shadow-lg px-2">
        <button className="flex flex-col items-center gap-1 text-alibaba-orange min-w-[50px]">
          <i className="fa-solid fa-house text-xl"></i>
          <span className="text-[10px] font-bold">{t.ui.home}</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500 min-w-[50px]">
          <i className="fa-solid fa-lightbulb text-xl"></i>
          <span className="text-[10px] font-bold">{t.ui.tips}</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500 min-w-[50px] relative">
          <i className="fa-solid fa-comment-dots text-xl"></i>
          <span className="absolute top-0 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          <span className="text-[10px] font-bold">{t.messages}</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500 min-w-[50px]">
          <i className="fa-solid fa-cart-shopping text-xl"></i>
          <span className="text-[10px] font-bold">{t.cart}</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500 min-w-[50px]">
          <i className="fa-solid fa-user text-xl"></i>
          <span className="text-[10px] font-bold">{t.myAccount}</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
