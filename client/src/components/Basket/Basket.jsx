import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Basket.module.css';
import { basketDel, BasketAddFromBd } from '../../store/actions/basketAction';

export default function Basket() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3001/basket', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(BasketAddFromBd(res));
      })
      .catch();
  }, []);

  const basket = useSelector((store) => store.basketStore);

  const delBasket = (el) => {
    console.log('===>>> 👉👉👉 file: Basket.jsx:20 👉👉👉 el', el);
    dispatch(basketDel(el));
    fetch('http://localhost:3001/basket', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: el,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch();
  };

  return (
    <>
    <div>
      {basket.length > 0 && basket.map((el) => (
         <div key={el.id}>
           <div> {el.name}</div>
           <div> {el.price}</div>
           <div> <img src={`http://localhost:3001/${el.image}`} alt="" /></div>
           <button onClick={() => delBasket(el.id)} type="button">Удалить</button>
         </div>
      )) }
    </div>
     <div> Общая сумма: {basket.reduce((acc, el) => acc + el.price, 0)}</div>
     <button type="button">Оформить заказ</button>
    </>
  );
}
