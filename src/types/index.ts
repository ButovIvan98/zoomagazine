export interface ProductCharacteristic {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  discount: string;
  img: string;
  description: string;
  characteristics: ProductCharacteristic[];
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
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  cartCount: number;
}
