import React, { useState, useEffect } from 'react';

export default function Purchases() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/purchasesHistory', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPurchases(data);
      })
      .catch(console.log);
  }, []);

  return (
<div>
  {purchases && purchases.map((el) => (
    <div key={el.id}>
      <div>Название: {el.purchase.name}</div>
      <div>Цена: {el.purchase.price} </div>
      <div>Описание: {el.purchase.description}</div>
      <div>Куплено: {new Date(el.data).toLocaleDateString()}</div>
    </div>
  ))}
</div>
  );
}
