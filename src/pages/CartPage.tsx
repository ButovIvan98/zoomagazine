import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart } from 'lucide-react';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Header />
      <main className="cart-page">
        <div className="container">
          <h1 className="cart-page__title">Корзина</h1>

          {items.length === 0 ? (
            <div className="cart-empty">
              <ShoppingCart size={64} className="cart-empty__icon" />
              <p className="cart-empty__text">Ваша корзина пуста</p>
              <Link to="/" className="cart-empty__btn">
                Перейти к покупкам
              </Link>
            </div>
          ) : (
            <div className="cart-layout">
              <ul className="cart-list">
                {items.map((item) => (
                  <li key={item.id} className="cart-item">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="cart-item__img"
                    />
                    <div className="cart-item__info">
                      <h3 className="cart-item__title">{item.title}</h3>
                      <span className="cart-item__price">{item.price} ₽ / шт.</span>
                    </div>
                    <div className="cart-item__qty">
                      <button
                        className="cart-item__qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Уменьшить количество"
                      >
                        −
                      </button>
                      <span className="cart-item__qty-value">{item.quantity}</span>
                      <button
                        className="cart-item__qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Увеличить количество"
                      >
                        +
                      </button>
                    </div>
                    <span className="cart-item__subtotal">
                      {item.price * item.quantity} ₽
                    </span>
                    <button
                      className="cart-item__remove"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Удалить товар"
                    >
                      <Trash2 size={18} />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="cart-summary">
                <h2 className="cart-summary__title">Итого</h2>
                <div className="cart-summary__row">
                  <span>Товаров:</span>
                  <span>{totalCount} шт.</span>
                </div>
                <div className="cart-summary__row cart-summary__row--total">
                  <span>Сумма:</span>
                  <span>{total} ₽</span>
                </div>
                <button className="cart-summary__btn">
                  Оформить заказ
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
