import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/SignIn/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
  </React.StrictMode>
);
