import React, { useState } from 'react';
import StripeContainer from './StripeContainer/StripeContainer';
import './Stripe.css';

export default function Stripe() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div>
      <h1>Hello</h1>
    {showItem
      ? <StripeContainer />
      : (
    <>
    <h3>$10.00</h3> <p className="imageBox"> <img className="item" src="https://lis-skins.ru/market_images/59576_b.png" alt="item" /></p>
    <button className="button" onClick={() => setShowItem(true)} type="">Купить</button>
    </>
      )}
    </div>
  );
}
