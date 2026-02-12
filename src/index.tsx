import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Для замера производительности передайте функцию:
// reportWebVitals(console.log)
// Документация: https://bit.ly/CRA-vitals
reportWebVitals();
