import React from 'react';
import { ChevronRight } from 'lucide-react';
import './CategoryCard.css';

interface CategoryCardProps {
  title: string;
  img: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, img }) => {
  return (
    <div className="category-card">
      <span className="category-card__title">{title}</span>
      <div className="category-card__arrow" aria-hidden="true">
        <ChevronRight size={18} />
      </div>
      <img src={img} alt={title} className="category-card__img" />
    </div>
  );
};

export default CategoryCard;
