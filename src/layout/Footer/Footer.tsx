import React from 'react';
import './Footer.css';

const SOCIAL_LINKS: string[] = ['VK', 'TG', 'OK'];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <div className="footer-logo-icon">O</div>
              <span className="footer-logo-text">ГАМА</span>
            </div>
            <p className="footer-desc">
              Лучшие товары для ваших любимых питомцев с доставкой до двери.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Навигация</h4>
            <div className="footer-links">
              <a href="/help">Помощь</a>
              <a href="/delivery">Доставка</a>
              <a href="/certificates">Сертификаты</a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Контакты</h4>
            <p className="footer-contact">info@agama-pet.ru</p>
            <p className="footer-phone">8 (800) 555-35-35</p>
          </div>

          <div>
            <h4 className="footer-title">Мы в соцсетях</h4>
            <div className="footer-social">
              {SOCIAL_LINKS.map((social) => (
                <div key={social} className="social-btn">
                  {social}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
