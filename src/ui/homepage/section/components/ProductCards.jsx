import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="modern-offer-card">
     
      <div className="offer-img-container">
        <div className="discount-badge">{product.discount}</div>
        <button className="wishlist-btn-top">
          <Heart size={24} fill="#71b280" strokeWidth={1.5} />
        </button>
        <img src={product.img} alt={product.title} />
      </div>

      <div className="offer-info-bottom">
        <h3 className="offer-title-white">{product.title}</h3>
        
        <div className="price-container-white">
          <div>
            <span className="old-price">{product.oldPrice}₽</span>
            <span className="current-price">{product.price}₽</span>
          </div>
          <button style={{ 
            background: 'none', 
            border: 'none', 
            color: '#71b280', 
            cursor: 'pointer' 
          }}>
            <ShoppingCart size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;