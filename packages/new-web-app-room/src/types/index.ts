export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  size: string;
  color: string;
  quantity: number;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  href: string;
}
