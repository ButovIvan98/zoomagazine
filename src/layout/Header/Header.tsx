import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Header.css';

const Header: React.FC = () => {
  const { cartCount } = useCart();

  return (
    <>
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <div className="logo-icon">O</div>
            <span className="logo-text">ГАМА</span>
          </div>

          <nav className="nav">
            <Link to="/animals">Животные</Link>
            <Link to="/toys">Игрушки</Link>
            <Link to="/meds">Лекарства</Link>
            <Link to="/food">Корма</Link>
          </nav>

          <div className="header-actions">
            <div className="search-container">
              <Search className="search-icon" size={18} />
              <input type="text" className="search-input" placeholder="Поиск..." />
            </div>
            <button className="header-btn" aria-label="Личный кабинет">
              <User size={20} />
            </button>
            <button className="header-btn header-btn--cart" aria-label="Корзина">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
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

export default Header;
