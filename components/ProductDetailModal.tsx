
import React, { useState, useEffect } from 'react';
import { Product, Review } from '../types';
import { useTranslation } from '../LanguageContext';
import { generateSellerPitch } from '../services/geminiService';
import ReviewSection from './ReviewSection';

interface Props {
  product: Product;
  onClose: () => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (productId: string) => void;
}

const ProductDetailModal: React.FC<Props> = ({ product, onClose, isWishlisted = false, onToggleWishlist }) => {
  const { t, lang } = useTranslation();
  const [pitch, setPitch] = useState<string>('');
  const [localReviews, setLocalReviews] = useState<Review[]>(product.reviews || []);

  useEffect(() => {
    const fetchPitch = async () => {
      const p = await generateSellerPitch(product.name, lang);
      setPitch(p);
    };
    fetchPitch();
  }, [product.name, lang]);

  const handleAddReview = (newRev: Omit<Review, 'id' | 'date'>) => {
    const review: Review = {
      ...newRev,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString().split('T')[0]
    };
    setLocalReviews([review, ...localReviews]);
  };

  const handleToggleWishlist = () => {
    if (onToggleWishlist) {
      onToggleWishlist(product.id);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 md:p-8 bg-black/60 backdrop-blur-sm">
      <div 
        className="bg-white w-full max-w-5xl max-h-full rounded-3xl shadow-2xl overflow-y-auto no-scrollbar relative animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-white border shadow-lg rounded-full flex items-center justify-center text-gray-500 hover:text-alibaba-orange hover:scale-110 transition z-10"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        <div className="p-6 md:p-12">
          {/* Product Info Section */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
            {/* Image Gallery Simulation */}
            <div className="md:w-1/2 space-y-4">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 border relative">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                
                {/* Wishlist Heart Overlay for Mobile/Quick Glance */}
                <button 
                  onClick={handleToggleWishlist}
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full border shadow-lg flex items-center justify-center transition-all ${isWishlisted ? 'bg-red-50 border-red-100 text-red-500' : 'bg-white border-gray-100 text-gray-400 hover:text-red-500 hover:scale-110'}`}
                >
                  <i className={`fa-${isWishlisted ? 'solid' : 'regular'} fa-heart text-xl`}></i>
                </button>
              </div>
              <div className="flex gap-4 overflow-x-auto no-scrollbar">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-20 h-20 rounded-xl border-2 border-transparent hover:border-alibaba-orange transition overflow-hidden shrink-0 cursor-pointer">
                    <img src={`https://picsum.photos/200/200?random=${i + 500}`} className="w-full h-full object-cover" alt="gallery" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Meta */}
            <div className="md:w-1/2 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                {product.isVerified && (
                  <span className="bg-blue-600 text-white text-[10px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1.5 shadow-sm">
                    <i className="fa-solid fa-check-circle"></i> VERIFIED SUPPLIER
                  </span>
                )}
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{product.category}</span>
              </div>
              
              <div className="flex justify-between items-start gap-4">
                <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-4">
                  {product.name}
                </h1>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-orange-400 text-sm gap-0.5">
                   <i className="fa-solid fa-star"></i>
                   <i className="fa-solid fa-star"></i>
                   <i className="fa-solid fa-star"></i>
                   <i className="fa-solid fa-star"></i>
                   <i className="fa-solid fa-star"></i>
                </div>
                <span className="text-sm font-bold text-gray-700">{product.rating}</span>
                <span className="text-sm text-gray-400 font-medium underline cursor-pointer">{localReviews.length} {lang === 'ar' ? 'مراجعة' : 'reviews'}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-sm text-gray-700 font-bold">{product.salesCount}+ {lang === 'ar' ? 'طلب' : 'orders'}</span>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                <p className="text-4xl font-black text-alibaba-orange mb-1">{product.priceRange}</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Min. Order: {product.moq}</p>
              </div>

              {/* AI Insights Card */}
              <div className="border-2 border-orange-50 bg-orange-50/30 rounded-2xl p-6 mb-8 relative">
                <div className="absolute -top-3 left-6 bg-alibaba-orange text-white text-[9px] px-2 py-0.5 rounded-full font-black flex items-center gap-1 shadow-sm">
                   <i className="fa-solid fa-robot"></i> SMART PITCH
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "{pitch || (lang === 'ar' ? 'جاري التحليل بالذكاء الاصطناعي...' : 'Generating AI insights...')}"
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 mt-auto">
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-alibaba-orange text-white py-4 rounded-2xl font-black text-lg shadow-lg hover:shadow-orange-200 hover:-translate-y-1 transition flex items-center justify-center gap-3">
                    <i className="fa-solid fa-envelope"></i> {lang === 'ar' ? 'اتصل بالمورد' : 'Contact Supplier'}
                  </button>
                  <button className="bg-white border-2 border-gray-100 text-gray-900 py-4 rounded-2xl font-black text-lg hover:bg-gray-50 transition flex items-center justify-center gap-3">
                    <i className="fa-solid fa-cart-shopping"></i> {lang === 'ar' ? 'اطلب الآن' : 'Order Now'}
                  </button>
                </div>
                
                <button 
                  onClick={handleToggleWishlist}
                  className={`flex items-center justify-center gap-2 py-3 rounded-2xl font-bold transition-all border-2 ${isWishlisted ? 'bg-red-50 border-red-100 text-red-500 shadow-sm' : 'bg-white border-gray-100 text-gray-500 hover:border-alibaba-orange hover:text-alibaba-orange'}`}
                >
                  <i className={`fa-${isWishlisted ? 'solid' : 'regular'} fa-heart text-lg`}></i>
                  {isWishlisted ? t.removeFromWishlist : t.addToWishlist}
                </button>
              </div>

              {/* Seller Info */}
              <div className="mt-8 flex items-center gap-4 border-t pt-8">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-black text-gray-400 border shrink-0">
                  {product.sellerName.charAt(0)}
                </div>
                <div>
                   <h4 className="font-bold text-gray-900 hover:text-alibaba-orange cursor-pointer transition">{product.sellerName}</h4>
                   <p className="text-xs text-gray-500 flex items-center gap-1">
                    <i className="fa-solid fa-location-dot"></i> {product.location}, Morocco
                   </p>
                </div>
                <button className="ml-auto text-xs font-bold text-alibaba-orange border border-alibaba-orange px-4 py-1.5 rounded-full hover:bg-alibaba-orange hover:text-white transition">
                  Visit Store
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Reviews Section */}
          <ReviewSection 
            reviews={localReviews} 
            averageRating={product.rating} 
            reviewCount={localReviews.length} 
            onAddReview={handleAddReview}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
