
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Consumer Electronics', translationKey: 'electronics', icon: 'fa-laptop' },
  { id: '2', name: 'Apparel', translationKey: 'apparel', icon: 'fa-shirt' },
  { id: '3', name: 'Home Furniture', translationKey: 'home', icon: 'fa-couch' },
  { id: '4', name: 'Beauty & Personal Care', translationKey: 'beauty', icon: 'fa-sparkles' },
  { id: '5', name: 'Sports & Activity', translationKey: 'sports', icon: 'fa-basketball' },
  { id: '6', name: 'Games & Entertainment', translationKey: 'games', icon: 'fa-gamepad' },
  { id: '7', name: 'Books & Magazines', translationKey: 'books', icon: 'fa-book' },
  { id: '8', name: 'Packaging & Printing', translationKey: 'packaging', icon: 'fa-box' },
  { id: '9', name: 'Tools & Hardware', translationKey: 'tools', icon: 'fa-hammer' },
  { id: '10', name: 'Machinery', translationKey: 'machinery', icon: 'fa-gears' },
];

const MOCK_REVIEWS = [
  { id: 'r1', userName: 'Ahmed K.', rating: 5, comment: 'Excellent quality, fast shipping to Casablanca!', date: '2025-01-15' },
  { id: 'r2', userName: 'Sara M.', rating: 4, comment: 'Very good product, matches the description perfectly.', date: '2025-02-10' },
  { id: 'r3', userName: 'John Doe', rating: 5, comment: 'Great for my business, will order more.', date: '2025-02-20' },
];

export const MOCK_PRODUCTS: Product[] = [
  // Consumer Electronics
  { id: 'elec1', name: 'Smart Noise Cancelling Headphones v2', priceRange: '$15.00 - $25.00', moq: '50 Pcs', imageUrl: 'https://picsum.photos/400/400?random=101', sellerName: 'TechSource MA', isVerified: true, location: 'Casablanca', category: 'Consumer Electronics', salesCount: 1500, rating: 4.8, reviewCount: 124, reviews: MOCK_REVIEWS },
  { id: 'elec2', name: '4K Ultra HD Action Camera 60FPS', priceRange: '$35.00 - $50.00', moq: '20 Pcs', imageUrl: 'https://picsum.photos/400/400?random=102', sellerName: 'Digital Flow', isVerified: true, location: 'Rabat', category: 'Consumer Electronics', salesCount: 800, rating: 4.5, reviewCount: 56, reviews: MOCK_REVIEWS },
  { id: 'elec3', name: 'Fast Charge Power Bank 20000mAh', priceRange: '$8.00 - $12.00', moq: '100 Pcs', imageUrl: 'https://picsum.photos/400/400?random=103', sellerName: 'Global Watts', isVerified: false, location: 'Tangier', category: 'Consumer Electronics', salesCount: 2200, rating: 4.2, reviewCount: 310, reviews: MOCK_REVIEWS },
  
  // Apparel
  { id: 'app1', name: 'Classic Leather Jacket Men - Genuine Sheepskin', priceRange: '$45.00 - $65.00', moq: '10 Pcs', imageUrl: 'https://picsum.photos/400/400?random=201', sellerName: 'Atlas Leathers', isVerified: true, location: 'Marrakech', category: 'Apparel', salesCount: 300, rating: 4.9, reviewCount: 45, reviews: MOCK_REVIEWS },
  { id: 'app2', name: 'Slim Fit Cotton Dress Shirt for Professionals', priceRange: '$12.00 - $18.00', moq: '50 Pcs', imageUrl: 'https://picsum.photos/400/400?random=202', sellerName: 'Moroccan Style House', isVerified: true, location: 'Fes', category: 'Apparel', salesCount: 1200, rating: 4.6, reviewCount: 89, reviews: MOCK_REVIEWS },
  { id: 'app3', name: 'Premium Silk Scarves with Traditional Patterns', priceRange: '$5.00 - $8.00', moq: '200 Pcs', imageUrl: 'https://picsum.photos/400/400?random=203', sellerName: 'Medina Silks', isVerified: true, location: 'Fes', category: 'Apparel', salesCount: 4500, rating: 4.7, reviewCount: 212, reviews: MOCK_REVIEWS },
  
  // Home Furniture
  { id: 'home1', name: 'Modern Velvet Sofa Set - 3 Seater', priceRange: '$250.00 - $400.00', moq: '1 Set', imageUrl: 'https://picsum.photos/400/400?random=301', sellerName: 'Urban Decor Fes', isVerified: true, location: 'Fes', category: 'Home Furniture', salesCount: 150, rating: 4.8, reviewCount: 12, reviews: MOCK_REVIEWS },
  { id: 'home2', name: 'Minimalist Oak Wood Coffee Table', priceRange: '$40.00 - $70.00', moq: '10 Pcs', imageUrl: 'https://picsum.photos/400/400?random=302', sellerName: 'Modern Wood MA', isVerified: true, location: 'Sale', category: 'Home Furniture', salesCount: 600, rating: 4.4, reviewCount: 34, reviews: MOCK_REVIEWS },
  { id: 'home3', name: 'Luxury King Size Bed with Orthopedic Mattress', priceRange: '$350.00 - $600.00', moq: '1 Set', imageUrl: 'https://picsum.photos/400/400?random=303', sellerName: 'Comfort Dreams', isVerified: true, location: 'Casablanca', category: 'Home Furniture', salesCount: 90, rating: 4.9, reviewCount: 8, reviews: MOCK_REVIEWS },

  // Beauty & Care
  { id: 'beau1', name: 'Organic Argan Oil Face Serum 100ml', priceRange: '$7.00 - $12.00', moq: '20 Bottles', imageUrl: 'https://picsum.photos/400/400?random=401', sellerName: 'Sahara Beauty', isVerified: true, location: 'Agadir', category: 'Beauty & Personal Care', salesCount: 5000, rating: 4.9, reviewCount: 1200, reviews: MOCK_REVIEWS },
  { id: 'beau2', name: 'Rose Water Hydrating Mist - Natural Distillate', priceRange: '$3.50 - $5.50', moq: '100 Units', imageUrl: 'https://picsum.photos/400/400?random=402', sellerName: 'Valley of Roses', isVerified: true, location: 'Kelaat M\'Gouna', category: 'Beauty & Personal Care', salesCount: 3200, rating: 4.8, reviewCount: 450, reviews: MOCK_REVIEWS },
  { id: 'beau3', name: 'Black Soap (Sabon Beldi) with Eucalyptus 5kg', priceRange: '$10.00 - $15.00', moq: '10 Pails', imageUrl: 'https://picsum.photos/400/400?random=403', sellerName: 'Hammam Tradition', isVerified: true, location: 'Marrakech', category: 'Beauty & Personal Care', salesCount: 1800, rating: 4.7, reviewCount: 320, reviews: MOCK_REVIEWS },

  // Sports
  { id: 'sport1', name: 'Adjustable Dumbbell Set 20kg - Iron', priceRange: '$30.00 - $45.00', moq: '20 Sets', imageUrl: 'https://picsum.photos/400/400?random=501', sellerName: 'Atlas Gym Supplies', isVerified: true, location: 'Casablanca', category: 'Sports & Activity', salesCount: 750, rating: 4.5, reviewCount: 67, reviews: MOCK_REVIEWS },
  { id: 'sport2', name: 'Yoga Mat Anti-Slip High Density 10mm', priceRange: '$4.00 - $7.00', moq: '50 Pcs', imageUrl: 'https://picsum.photos/400/400?random=502', sellerName: 'Zen Sports', isVerified: true, location: 'Rabat', category: 'Sports & Activity', salesCount: 1100, rating: 4.6, reviewCount: 134, reviews: MOCK_REVIEWS },
  { id: 'sport3', name: 'Professional Soccer Training Ball Size 5', priceRange: '$8.00 - $12.00', moq: '100 Pcs', imageUrl: 'https://picsum.photos/400/400?random=503', sellerName: 'Lions Sports', isVerified: false, location: 'Kenitra', category: 'Sports & Activity', salesCount: 3000, rating: 4.3, reviewCount: 412, reviews: MOCK_REVIEWS },

  // Games
  { id: 'game1', name: 'Wireless Game Controller for PC & Console', priceRange: '$12.00 - $18.00', moq: '50 Pcs', imageUrl: 'https://picsum.photos/400/400?random=601', sellerName: 'Level Up MA', isVerified: true, location: 'Casablanca', category: 'Games & Entertainment', salesCount: 1200, rating: 4.7, reviewCount: 198, reviews: MOCK_REVIEWS },
  { id: 'game2', name: 'RGB Mechanical Gaming Keyboard - Blue Switch', priceRange: '$20.00 - $35.00', moq: '30 Pcs', imageUrl: 'https://picsum.photos/400/400?random=602', sellerName: 'Pro Gamer Gear', isVerified: true, location: 'Rabat', category: 'Games & Entertainment', salesCount: 600, rating: 4.4, reviewCount: 78, reviews: MOCK_REVIEWS },
  { id: 'game3', name: 'Retro Handheld Console with 500 Built-in Games', priceRange: '$10.00 - $15.00', moq: '100 Pcs', imageUrl: 'https://picsum.photos/400/400?random=603', sellerName: 'Nostalgia Tech', isVerified: false, location: 'Tangier', category: 'Games & Entertainment', salesCount: 2500, rating: 4.1, reviewCount: 322, reviews: MOCK_REVIEWS },

  // Books
  { id: 'book1', name: 'Moroccan Cooking Masterclass - Hardcover', priceRange: '$15.00 - $22.00', moq: '50 Copies', imageUrl: 'https://picsum.photos/400/400?random=701', sellerName: 'Heritage Books', isVerified: true, location: 'Fes', category: 'Books & Magazines', salesCount: 900, rating: 4.9, reviewCount: 156, reviews: MOCK_REVIEWS },
  { id: 'book2', name: 'Arabic Calligraphy Workbook for Beginners', priceRange: '$5.00 - $8.00', moq: '100 Copies', imageUrl: 'https://picsum.photos/400/400?random=702', sellerName: 'Art & Pen Store', isVerified: true, location: 'Casablanca', category: 'Books & Magazines', salesCount: 1400, rating: 4.7, reviewCount: 89, reviews: MOCK_REVIEWS },
  { id: 'book3', name: 'Business Leadership Strategies - 2025 Edition', priceRange: '$18.00 - $30.00', moq: '30 Copies', imageUrl: 'https://picsum.photos/400/400?random=703', sellerName: 'Mindset Publishing', isVerified: true, location: 'Rabat', category: 'Books & Magazines', salesCount: 500, rating: 4.6, reviewCount: 42, reviews: MOCK_REVIEWS },
];
