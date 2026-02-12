export interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  discount: string;
  img: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: number;
  title: string;
  img: string;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  cartCount: number;
}
