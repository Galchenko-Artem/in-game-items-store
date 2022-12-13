import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { basketAdd, basketDel } from '../../store/actions/basketAction';

export default function Product() {
  const [product, setProduct] = useState(null);
  const user = useSelector((state) => state.userStore);
  const basket = useSelector((store) => store.basketStore);

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const url = `http://localhost:3001/product/${params.id}`;

  useEffect(() => {
    fetch(url, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch(console.log);
  }, []);

  // const addToBasket = (el) => {
  //   dispatch(basketAdd(el));
  // };

  const addToBasket = (el) => {
    const isInBasket = basket.some((item) => item.id === el.id);
    if (!isInBasket) {
      dispatch(basketAdd(el));
      console.log('Добавляем в редакс так как его нет в корзине');
    }
    fetch('http://localhost:3001/basket', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(el),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  const removeFromBasket = (el) => {
    dispatch(basketDel(el.id));
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
      .then((res) => console.log(res))
      .catch();
  };

  return (
    <div>
  <button type="button" onClick={() => navigate(-1)}>Вернуться назад</button>
    {product ? (
<>
      <div><img src={`http://localhost:3001/${product.product.image}`} alt={product.name} /></div>
      <div>Название:{product.product.name}</div>
      <div>Описание: {product.product.description}</div>
      <div>Цена: {product.product.price}</div>
      <div>Игра {product.product.Game.title}</div>
      <div>Имя продавца: {product?.vendorName}</div>
      {user.user ? (
      // <div>
      //     <button onClick={() => addToBasket(product.product)}>Корзина</button>
      // </div>
          <div>
            {basket.some((item) => item.id === product.product.id) ? (
              <button className="inBasket" onClick={() => removeFromBasket(product.product)}>В корзине</button>
            ) : (
              <button onClick={() => addToBasket(product.product)}>В корзину</button>
            )}
          </div>

      ) : (null)}

</>
    ) : (null)}

    </div>
  );
}
