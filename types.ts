
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  stock: number;
  isAiPicked?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: Date;
}

export interface MarketingAsset {
  id: string;
  type: 'banner' | 'insta' | 'model' | 'festival';
  imageUrl: string;
  caption: string;
  category: string;
}

export enum AppView {
  STOREFRONT = 'STOREFRONT',
  PRODUCT_DETAIL = 'PRODUCT_DETAIL',
  ADMIN = 'ADMIN',
  STUDIO = 'STUDIO'
}
