import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Product() {
  const [product, setProduct] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

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

  return (
    <div>
  <button type="button" onClick={() => navigate(-1)}>Вернуться назад</button>
    {product ? (
<>
      <div><img src={`http://localhost:3001/${product.image}`} alt={product.name} /></div>
      <div>Название:{product.name}</div>
      <div>Описание: {product.description}</div>
      <div>Цена: {product.price}</div>
      <div>Игра {product.Game.title}</div>
      <div>Категория: {product.Category.title}</div>
</>
    ) : (null)}

    </div>
  );
}
