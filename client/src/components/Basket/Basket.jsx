import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Basket.module.css';
import { basketDel } from '../../store/actions/basketAction';

export default function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((store) => store.basketStore);

  // useEffect(() => {
  //   fetch('http://localhost:3001/basket', {
  //     credentials: 'include',
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //     });
  // }, []);

  const delBasket = (el) => {
    console.log(basket);
    dispatch(basketDel(el));
  };

  return (
    <>
    <div>
      { basket.map((el) => (
         <div key={el.id}>
           <div> {el.name}</div>
           <div> {el.price}</div>
           <div> <img src={`http://localhost:3001/${el.image}`} alt="" /></div>
           <button onClick={() => delBasket(el.id)} type="button">Удалить</button>
         </div>
      )) }
    </div>
    <div> Общая сумма: {basket.reduce((a, b) => a + b.price, 0)}</div>
    <button type="button">Оформить заказ</button>
    </>
  );
}
