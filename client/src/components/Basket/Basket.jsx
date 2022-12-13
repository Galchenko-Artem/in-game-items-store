import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Basket.module.css';
import { basketDel, basketLogout } from '../../store/actions/basketAction';

export default function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((store) => store.basketStore);
  console.log('===>>> 👉👉👉 file: Basket.jsx:10 👉👉👉 basket', basket);

  // useEffect(() => {
  //   fetch('http://localhost:3001/basket/1', {
  //     credentials: 'include',
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setBasket(res);
  //       console.log(res);
  //     })
  //     .catch();
  // }, []);

  const delBasket = (el) => {
    fetch('http://localhost:3001/basket', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        el,
      ),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'deleted') {
          dispatch(basketDel(el.id));
        }
      })
      .catch();
  };

  const butItems = (e) => {
    // e.preventDefault();
    const money = document.querySelector('.allMoney').textContent;
    console.log(money);
    console.log(basket);
    fetch('http://localhost:3001/basket', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        basket,
      ),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.status);
        if (res.status === 'bought') {
          dispatch(basketLogout([]));
        }
      })
      .catch();
  };

  return (
    <>
    <div>
      {basket?.length > 0 && basket.map((el) => (
         <div key={el.id}>
           <div> {el.name}</div>
           <div> {el.price}</div>
           <div> <img src={`http://localhost:3001/${el.image}`} alt="" /></div>
           <button onClick={() => delBasket(el)} type="button">Удалить</button>
         </div>
      )) }
    </div>
        <div>
          Общая сумма: <span className="allMoney">{basket.reduce((acc, el) => acc + el.price, 0)}</span>
        </div>
     <button onClick={butItems} type="button">Оформить заказ</button>
    </>
  );
}
