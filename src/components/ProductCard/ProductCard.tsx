import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { items, addToCart, updateQuantity } = useCart();
  const cartItem = items.find((item) => item.id === product.id);

  const stopNav = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">

      {/* Картинка */}
      <div className="product-card__img-wrap">
        <button
          className="product-card__wishlist"
          aria-label="Добавить в избранное"
          onClick={stopNav}
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

        {/* Кнопка / счётчик */}
        {cartItem ? (
          <div className="product-card__qty" onClick={stopNav}>
            <button
              className="product-card__qty-btn"
              aria-label="Уменьшить количество"
              onClick={(e) => { stopNav(e); updateQuantity(product.id, cartItem.quantity - 1); }}
            >
              −
            </button>
            <span className="product-card__qty-value">{cartItem.quantity}</span>
            <button
              className="product-card__qty-btn"
              aria-label="Увеличить количество"
              onClick={(e) => { stopNav(e); updateQuantity(product.id, cartItem.quantity + 1); }}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="product-card__buy-btn"
            aria-label="Добавить в корзину"
            onClick={(e) => { stopNav(e); addToCart(product); }}
          >
            <ShoppingCart size={18} />
            Купить
          </button>
        )}

      </div>
    </Link>
  );
};

export default ProductCard;
