import React from 'react';
import { FEATURED_PRODUCTS } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';

const Offers: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Вкусные цены</h2>
        <div className="offers-grid">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
