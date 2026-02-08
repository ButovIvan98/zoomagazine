import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const Offers = () => {
  const products = [
    { id: 1, title: 'Корм Whiskas', price: 20, oldPrice: 50, discount: '50%', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300' },
    { id: 2, title: 'Корм для игуан', price: 450, oldPrice: 600, discount: '25%', img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=300' },
    { id: 3, title: 'Лакомство', price: 120, oldPrice: 200, discount: '40%', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=300' }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Вкусные цены</h2>
        <div className="offers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
          {products.map((product) => (
            <div key={product.id} className="modern-offer-card">
              {/* Верхняя часть (Белая подложка) */}
              <div className="offer-img-container">
                <div className="discount-badge">{product.discount}</div>
                <button className="wishlist-btn-top">
                  <Heart size={24} fill="#71b280" />
                </button>
                <img src={product.img} alt={product.title} />
              </div>

              {/* Нижняя часть (Инфо и цена) */}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;