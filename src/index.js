import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import './App.css';

AOS.init(); // Initialize AOS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);