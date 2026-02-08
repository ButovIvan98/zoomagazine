import React from 'react';
import { ChevronRight } from 'lucide-react';

const CategoryCard = ({ title, img }) => {
  return (
    <div className="category-card-custom">
      <span className="category-card-title">{title}</span>
      <div className="category-card-arrow">
        <ChevronRight size={20} />
      </div>
      <img 
        src={img} 
        alt={title} 
        className="category-card-image" 
      />
    </div>
  );
};

export default CategoryCard;