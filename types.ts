
export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  priceRange: string;
  moq: string;
  imageUrl: string;
  sellerName: string;
  isVerified: boolean;
  location: string;
  category: string;
  salesCount: number;
  rating?: number;
  reviewCount?: number;
  reviews?: Review[];
}

export interface Category {
  id: string;
  name: string;
  translationKey: string;
  icon: string;
}
