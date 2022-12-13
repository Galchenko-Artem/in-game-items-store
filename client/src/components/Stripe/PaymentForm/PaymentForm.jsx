import React, { useState } from 'react';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import '../Stripe.css';

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: '#87bbfd' },
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const [stripeForm, setStripeForm] = useState('visible');
  const stripe = useStripe();
  const elements = useElements();

  const [load, setLoad] = useState(false);

  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      const response = await axios.post('http://localhost:3001/payment', {
        amount: 1500,
        id,
      });

      if (response.data.success) {
        setLoad(false);
        console.log(response.data);
        console.log('Succesful payment!');
        setSuccess(true);
      }
    }
  };

  return (
    <div>

        {!success
          ? (
  <form className={stripeForm} onSubmit={handleSubmit}>
    <fieldset className="FormGroup">
        <div className="FormRow">
      <CardElement options={CARD_OPTIONS} />
        </div>
    </fieldset>
    <button>Оплатить</button>
    {load
    && (
  <>
    <div id="wrapper">
    <div id="corpus" />
    <div id="spinner" />
    </div>
  <div id="text">&nbsp;Loading ...</div>
  </>
    )}
  </form>
          ) : (
    <div>
      <h2>Оплата прошла успешно!</h2>
    </div>
          )}
    </div>
  );
}
