import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './supportLots.css';

export default function SupportLots() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/admin/lots', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res);
      })
      .catch();
  }, []);

  const addLot = (el) => {
    console.log(el);
    fetch('http://localhost:3001/admin/lots', {
      credentials: 'include',
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(el),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'success') {
          setProducts(products.filter((product) => product.id !== el.id));
        }
      });
  };

  const removeLot = (el) => {
    fetch('http://localhost:3001/admin/lots', {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(el),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'success') {
          setProducts(products.filter((product) => product.id !== el.id));
        }
      });
  };
  return (
    <>
    <Link className="nav-main" to="/admin"><button>Назад к обращениям</button></Link>
    <h2>Новые лоты от пользователей</h2>
    {products.map((product) => (
    <div className="supportLotWrapper" key={product.id}>
      <p><img className="imgLot" src={`http://localhost:3001/${product.image}`} alt="lotImage" /></p>
      <div className="supportLot">
        Название товара: {product.name}
         Цена: {product.price}
         <br />
        <button type="button" onClick={() => addLot(product)}>Одобрить</button>
        <button type="button" onClick={() => removeLot(product)}>Отклонить</button>
      </div>
    </div>
    ))}
    </>
  );
}
