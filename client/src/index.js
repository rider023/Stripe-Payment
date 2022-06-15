import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe('pk_test_51LAzqRSFBgk6ziG6P0RzxhW35blJFF7uVwCMoDFKuUwFX9mbp5eQWKv1PnD1hWouoIMeOrbGWd6mzfzw20bZLxHR00zXCpCQYz')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
    <App />
    </Elements>
  </React.StrictMode>
);


