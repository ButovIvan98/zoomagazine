import React from 'react';
import ogamaPic from '../../ui/homepage/section/image/ogamabann.png';

const About: React.FC = () => {
  return (
    <section className="section about-section">
      <div className="container">
        <div className="about">
          <div className="about-img">
            <img src={ogamaPic} alt="Команда ОГАМА" />
          </div>
          <div className="about-content">
            <span className="promo-badge about-badge">Наша история</span>
            <h2 className="about-title">
              Мир рептилий с <span>любовью</span>
            </h2>
            <p className="about-text">
              В <span>«ОГАМА»</span> мы создаем экосистему для ваших чешуйчатых
              друзей. Это не просто магазин, а сообщество экспертов, которые
              знают о террариумистике всё.
            </p>
            <div className="about-stats">
              <div className="stat-card green">
                <h4 className="stat-number">10+ лет</h4>
                <p className="stat-label">Опыта в экспертности</p>
              </div>
              <div className="stat-card orange">
                <h4 className="stat-number">5000+</h4>
                <p className="stat-label">Довольных владельцев</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
