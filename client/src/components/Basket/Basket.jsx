import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Basket.module.css';
import { basketDel, basketLogout } from '../../store/actions/basketAction';

export default function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((store) => store.basketStore);

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

  return (
    <div className={styles.container}>
    <div className={styles.product_wrapper}>
      {basket?.length > 0 && basket.map((el) => (
         <div className={styles.product} key={el.id}>
           <div> <img className={styles.picture} src={`http://localhost:3001/${el.image}`} alt="" /></div>
           <div> {el.price}</div>
           <div> {el.name}</div>
           <button className={styles.button1} onClick={() => delBasket(el)} type="button">Удалить</button>
         </div>
      )) }
    </div>
        <div className={styles.arrange}>
          Общая сумма: <span className="allMoney">{basket.reduce((acc, el) => acc + el.price, 0)}</span>
        <Link to="/payment"> <button className={styles.button} type="button">Оформить заказ</button></Link>
        </div>
    </div>
  );
}
