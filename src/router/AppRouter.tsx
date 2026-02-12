import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import ProductPage from '../pages/ProductPage';

// Заготовки для будущих страниц:
// import CatalogPage from '../pages/CatalogPage';
// import ProfilePage from '../pages/ProfilePage';
// import AboutPage from '../pages/AboutPage';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        {/* <Route path="/catalog" element={<CatalogPage />} /> */}
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
