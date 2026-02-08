import React from 'react';
import CategoryCard from './components/CategoryCard'; 

const Categories = () => {
  const categories = [
    { title: 'Корм', img: 'https://cdn-icons-png.flaticon.com/512/3047/3047928.png' }, 
    { title: 'Рыбы', img: 'https://cdn-icons-png.flaticon.com/512/2613/2613204.png' },
    { title: 'Птицы', img: 'https://cdn-icons-png.flaticon.com/512/2864/2864275.png' },
    { title: 'Игрушки', img: 'https://cdn-icons-png.flaticon.com/512/3048/3048381.png' },
    { title: 'Уход', img: 'https://cdn-icons-png.flaticon.com/512/3122/3122315.png' }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Категории товаров</h2>
        <div className="categories-grid">
          {categories.map((cat, idx) => (
            <CategoryCard 
              key={idx} 
              title={cat.title} 
              img={cat.img} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;