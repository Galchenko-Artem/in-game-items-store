import React, { useState, useEffect } from 'react';

export default function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/salesHistory', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSales(data);
      })
      .catch(console.log);
  }, []);

  return (
<div>
  {sales && sales.map((el) => (
    <div key={el.id}>
      <div>Название: {el.sales.name}</div>
      <div>Цена: {el.sales.price} </div>
      <div>Описание: {el.sales.description}</div>
      <div>Продано: {new Date(el.data).toLocaleDateString()}</div>
    </div>
  ))}
</div>
  );
}
