import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { basketAdd } from '../../store/actions/basketAction';

export default function Product() {
  const [product, setProduct] = useState(null);

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

  const addToBasket = (el) => {
    dispatch(basketAdd(el));
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
      <div>Категория: {product.product.Category.title}</div>
      <div>Имя продавца: {product?.vendorName}</div>
      <div>
          <button onClick={() => addToBasket(product.product)}>Корзина</button>
      </div>
</>
    ) : (null)}

    </div>
  );
}
