
import React, { useState } from 'react';
import { Review } from '../types';
import { useTranslation } from '../LanguageContext';

interface Props {
  reviews: Review[];
  averageRating?: number;
  reviewCount?: number;
  onAddReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

const ReviewSection: React.FC<Props> = ({ reviews, averageRating = 0, reviewCount = 0, onAddReview }) => {
  const { t, lang } = useTranslation();
  const [newRating, setNewRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddReview({ userName: 'Guest User', rating: newRating, comment });
      setComment('');
      setNewRating(5);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex text-orange-400 text-xs gap-0.5">
        {[...Array(5)].map((_, i) => (
          <i key={i} className={`fa-solid fa-star ${i < Math.floor(rating) ? 'fill-current' : 'text-gray-200'}`}></i>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-12 border-t pt-8">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Rating Summary */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-bold mb-4">{lang === 'ar' ? 'التقييمات والمراجعات' : 'Ratings & Reviews'}</h3>
          <div className="flex items-center gap-4">
            <span className="text-5xl font-black text-gray-900">{averageRating.toFixed(1)}</span>
            <div>
              {renderStars(averageRating)}
              <p className="text-sm text-gray-500 mt-1">{reviewCount} {lang === 'ar' ? 'مراجعة' : 'reviews'}</p>
            </div>
          </div>
          
          {/* Rating Bars (Simplified) */}
          <div className="mt-6 space-y-2">
            {[5, 4, 3, 2, 1].map(num => (
              <div key={num} className="flex items-center gap-2 text-xs">
                <span className="w-2 font-bold">{num}</span>
                <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-orange-400" 
                    style={{ width: num === 5 ? '80%' : num === 4 ? '15%' : '5%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Review Form */}
          <div className="mt-10 bg-gray-50 p-6 rounded-2xl border">
            <h4 className="font-bold mb-4 text-sm">{lang === 'ar' ? 'أضف مراجعتك' : 'Write a Review'}</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(num => (
                  <button 
                    key={num} 
                    type="button"
                    onClick={() => setNewRating(num)}
                    className={`text-xl ${num <= newRating ? 'text-orange-400' : 'text-gray-300'}`}
                  >
                    <i className="fa-solid fa-star"></i>
                  </button>
                ))}
              </div>
              <textarea 
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={lang === 'ar' ? 'اكتب تعليقك هنا...' : 'Share your experience...'}
                className="w-full p-3 rounded-xl border text-sm focus:border-alibaba-orange outline-none h-24"
                required
              />
              <button className="bg-alibaba-orange text-white w-full py-2.5 rounded-xl font-bold text-sm hover:bg-orange-600 transition">
                {lang === 'ar' ? 'إرسال المراجعة' : 'Submit Review'}
              </button>
            </form>
          </div>
        </div>

        {/* Reviews List */}
        <div className="md:w-2/3 space-y-8">
          {reviews.length > 0 ? (
            reviews.map(review => (
              <div key={review.id} className="border-b pb-6 last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="font-bold text-sm text-gray-800">{review.userName}</h5>
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{review.date}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic">"{review.comment}"</p>
                <div className="mt-4 flex gap-4 text-[10px] font-bold text-gray-400">
                  <button className="hover:text-alibaba-orange"><i className="fa-solid fa-thumbs-up mr-1"></i> Helpful (0)</button>
                  <button className="hover:text-red-500"><i className="fa-solid fa-flag mr-1"></i> Report</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center py-12 italic">
              {lang === 'ar' ? 'لا توجد مراجعات بعد. كن أول من يكتب مراجعة!' : 'No reviews yet. Be the first to write one!'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
