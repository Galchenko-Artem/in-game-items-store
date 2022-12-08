import React, { useState, useEffect } from 'react';

export default function Lots() {
  const [lots, setLots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/lots', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLots(data);
      })
      .catch(console.log);
  }, []);

  const deleteLot = (e) => {
    const { id } = e.target;
    console.log('АЙДИ КНОПКИ', id);

    fetch('http://localhost:3001/lots', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === 'удалено') {
          console.log('удалил лот из базы');
          setLots(lots.filter((el) => el.id !== +id));
        }
      }).catch(console.log);
  };

  return (
<div>
  {lots && lots.map((lot) => (
    <div key={lot.id}>
      <div><img src={lot.image} alt={lot.name} /></div>
      <div>Название: {lot.name}</div>
      <div>Цена: {lot.price} </div>
      <div>Описание: {lot.description}</div>
      {!lot.approved ? (<div>Статус: На рассмотрении</div>) : (null) }
      <div>Выставлен на продажу: {new Date(lot.updatedAt).toLocaleDateString()}</div>
      <button type="button" onClick={deleteLot} id={lot.id}> Удалить</button>
      <button type="button" id={lot.id}> Редактировать</button>
    </div>
  ))}
</div>
  );
}
