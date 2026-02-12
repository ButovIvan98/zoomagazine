import React from 'react';
import { CATEGORIES } from '../../data/categories';
import CategoryCard from '../CategoryCard/CategoryCard';

const Categories: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Категории товаров</h2>
        <div className="categories-grid">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} title={cat.title} img={cat.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
