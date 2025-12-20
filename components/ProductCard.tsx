
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { generateSellerPitch } from '../services/geminiService';
import { useTranslation } from '../LanguageContext';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [pitch, setPitch] = useState<string>('');
  const { lang } = useTranslation();

  useEffect(() => {
    let isMounted = true;
    
    const fetchPitch = async () => {
      // Add a small random delay to stagger the dozens of concurrent requests on initial load
      // This helps stay within the "per minute" rate limits of the free tier.
      const delay = Math.random() * 3000; 
      await new Promise(resolve => setTimeout(resolve, delay));
      
      if (!isMounted) return;

      const p = await generateSellerPitch(product.name, lang);
      if (isMounted) setPitch(p);
    };
    
    fetchPitch();
    
    return () => { isMounted = false; };
  }, [product.name, lang]);

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-transparent hover:border-alibaba-orange hover:shadow-xl transition-all group flex flex-col h-full w-[180px] md:w-[220px] shrink-0">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
        />
        {product.isVerified && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1 font-bold">
            <i className="fa-solid fa-check-circle"></i> VERIFIED
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">
           {product.salesCount}+ {lang === 'ar' ? 'مبيعات' : lang === 'zh' ? '销量' : 'Sales'}
        </div>
      </div>

      <div className="p-3 flex-grow flex flex-col">
        <h3 className="text-xs md:text-sm text-gray-800 line-clamp-2 hover:text-alibaba-orange cursor-pointer font-medium mb-1 h-8 md:h-10">
          {product.name}
        </h3>
        
        <p className="text-base md:text-lg font-bold text-gray-900 mt-1">{product.priceRange}</p>
        <p className="text-[10px] md:text-xs text-gray-500 font-medium">MOQ: {product.moq}</p>

        <div className="mt-2 border-t pt-2">
          <p className="text-[9px] uppercase font-bold text-gray-400 mb-1">
            {lang === 'ar' ? 'وصف ذكي' : lang === 'zh' ? '智能分析' : 'AI Insights'}
          </p>
          <p className="text-[10px] md:text-[11px] text-gray-600 italic line-clamp-2 min-h-[1.5rem] md:min-h-[2rem]">
            "{pitch || (lang === 'ar' ? 'جاري التحميل...' : lang === 'zh' ? '加载中...' : 'Loading...')}"
          </p>
        </div>

        <div className="mt-auto pt-3 flex items-center gap-2">
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-200 flex items-center justify-center text-[8px] md:text-[10px] font-bold text-gray-500 overflow-hidden shrink-0">
             {product.sellerName.charAt(0)}
          </div>
          <div className="flex-grow min-w-0">
            <p className="text-[10px] md:text-[11px] font-bold text-gray-700 hover:text-alibaba-orange cursor-pointer truncate">
              {product.sellerName}
            </p>
            <p className="text-[9px] md:text-[10px] text-gray-400 truncate">{product.location}</p>
          </div>
        </div>

        <button className="w-full mt-3 border border-alibaba-orange text-alibaba-orange py-1 rounded-full text-[10px] md:text-xs font-bold hover:bg-alibaba-orange hover:text-white transition">
           {lang === 'ar' ? 'تواصل مع المورد' : lang === 'zh' ? '联系供应商' : 'Contact Supplier'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
