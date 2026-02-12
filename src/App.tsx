import React from 'react';
import './App.css';
import { CartProvider } from './context/CartContext';
import AppRouter from './router/AppRouter';

const App: React.FC = () => {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
};

export default App;
