import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      {/* Картинка */}
      <div className="product-card__img-wrap">
        <button
          className="product-card__wishlist"
          aria-label="Добавить в избранное"
        >
          <Heart size={20} strokeWidth={1.5} />
        </button>
        <img
          src={product.img}
          alt={product.title}
          className="product-card__img"
        />
      </div>

      {/* Контент */}
      <div className="product-card__body">

        {/* Цена + скидка */}
        <div className="product-card__price-row">
          <span className="product-card__price">{product.price} ₽</span>
          <div className="product-card__price-meta">
            <span className="product-card__old-price">{product.oldPrice} ₽</span>
            <span className="product-card__discount">-{product.discount}</span>
          </div>
        </div>

        {/* Название */}
        <h3 className="product-card__title">{product.title}</h3>

        {/* Кнопка */}
        <button
          className="product-card__buy-btn"
          aria-label="Добавить в корзину"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart size={18} />
          Купить
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
