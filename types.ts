
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
}

export interface Category {
  id: string;
  name: string;
  translationKey: string;
  icon: string;
}
