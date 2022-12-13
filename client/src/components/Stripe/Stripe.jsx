import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StripeContainer from './StripeContainer/StripeContainer';
import './Stripe.css';

export default function Stripe() {
  const basket = useSelector((state) => state.basketStore);
  const finalPrice = basket.reduce((acc, el) => acc + el.price, 0);
  const [showItem, setShowItem] = useState(false);
  return (
    <div>
      <h1>Hello</h1>
    {showItem
      ? <StripeContainer />
      : (
    <>
    <h3>${finalPrice}</h3> <p className="imageBox"> <img className="item" src="https://sprinter-opt.ru/img/site/recycle_big.png" alt="item" /></p>
    <button className="button" onClick={() => setShowItem(true)} type="">Купить</button>
    </>
      )}
    </div>
  );
}
