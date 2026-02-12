import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ChevronRight } from 'lucide-react';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import { useCart } from '../context/CartContext';
import { FEATURED_PRODUCTS } from '../data/products';
import './ProductPage.css';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = FEATURED_PRODUCTS.find((p) => p.id === Number(id));

  const { items, addToCart, updateQuantity } = useCart();
  const cartItem = product ? items.find((item) => item.id === product.id) : undefined;

  if (!product) {
    return (
      <>
        <Header />
        <main className="product-page">
          <div className="container product-not-found">
            <p>Товар не найден</p>
            <Link to="/" className="product-not-found__btn">На главную</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="product-page">
        <div className="container">

          {/* Хлебные крошки */}
          <nav className="product-breadcrumb">
            <Link to="/" className="product-breadcrumb__link">Главная</Link>
            <ChevronRight size={14} className="product-breadcrumb__sep" />
            <span className="product-breadcrumb__current">{product.title}</span>
          </nav>

          {/* Основной блок */}
          <div className="product-layout">

            {/* Фото */}
            <div className="product-photo">
              <img
                src={product.img}
                alt={product.title}
                className="product-photo__img"
              />
              {product.discount && (
                <span className="product-photo__badge">-{product.discount}</span>
              )}
            </div>

            {/* Инфо */}
            <div className="product-info">
              <h1 className="product-info__title">{product.title}</h1>

              {/* Цены */}
              <div className="product-info__prices">
                <span className="product-info__price">{product.price} ₽</span>
                <span className="product-info__old-price">{product.oldPrice} ₽</span>
              </div>

              {/* Описание */}
              <p className="product-info__description">{product.description}</p>

              {/* Добавление в корзину */}
              {cartItem ? (
                <div className="product-info__qty">
                  <button
                    className="product-info__qty-btn"
                    aria-label="Уменьшить количество"
                    onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                  >
                    −
                  </button>
                  <span className="product-info__qty-value">{cartItem.quantity}</span>
                  <button
                    className="product-info__qty-btn"
                    aria-label="Увеличить количество"
                    onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="product-info__buy-btn"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart size={20} />
                  Добавить в корзину
                </button>
              )}

              {cartItem && (
                <p className="product-info__in-cart">
                  В корзине: {cartItem.quantity} шт. на {cartItem.quantity * product.price} ₽
                </p>
              )}
            </div>
          </div>

          {/* Характеристики */}
          <section className="product-chars">
            <h2 className="product-chars__title">Характеристики</h2>
            <table className="product-chars__table">
              <tbody>
                {product.characteristics.map((char) => (
                  <tr key={char.label} className="product-chars__row">
                    <td className="product-chars__label">{char.label}</td>
                    <td className="product-chars__value">{char.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
