import { Product } from '../types';

// TODO: заменить Unsplash-ссылки на реальные изображения товаров
export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Корм Whiskas',
    price: 20,
    oldPrice: 50,
    discount: '50%',
    img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300',
  },
  {
    id: 2,
    title: 'Корм для игуан',
    price: 450,
    oldPrice: 600,
    discount: '25%',
    img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=300',
  },
  {
    id: 3,
    title: 'Лакомство',
    price: 120,
    oldPrice: 200,
    discount: '40%',
    img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=300',
  },
  {
    id: 4,
    title: 'Витамины для рептилий',
    price: 350,
    oldPrice: 490,
    discount: '28%',
    img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300',
  },
];
