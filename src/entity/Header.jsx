import React from 'react';
import "./style/Header.css";
import { Search, ShoppingBag, User } from 'lucide-react'; 

const HeaderLizard = () => {
  return (
    <>

      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <div className="logo-icon">O</div>
            <span className="logo-text">ГАМА</span>
          </div>
          
          <nav className="nav">
            <a href="#animals">Животные</a>
            <a href="#toys">Игрушки</a>
            <a href="#meds">Лекарства</a>
            <a href="#food">Корма</a>
          </nav>

          <div className="header-actions">
            <div className="search-container">
              <Search className="search-icon" size={18} />
              <input type="text" className="search-input" placeholder="Поиск..." />
            </div>
            <button className="header-btn"><User size={20} /></button>
            <button className="header-btn" style={{position: 'relative'}}>
              <ShoppingBag size={20} />
              <span className="cart-badge">2</span>
            </button>
          </div>
        </div>
      </header>

      <section className="hero-lizard">
        <div className="hero-logo-container">
          <h1 className="hero-logo-text">
            <div className="logo-circle-icon"></div>
            ГАМА
          </h1>
        </div>

        <nav className="hero-nav">
          <button className="hero-nav-btn">Животные</button>
          <button className="hero-nav-btn">Игрушки</button>
          <button className="hero-nav-btn">Лекарства</button>
          <button className="hero-nav-btn">Корма</button>
        </nav>

        <div className="hero-search-wrapper">
          <input 
            type="text" 
            className="hero-search-input" 
            placeholder="Поиск по товарам..." 
          />
          <Search className="hero-search-icon" size={20} />
        </div>
      </section>
    </>
  );
};

export default HeaderLizard;