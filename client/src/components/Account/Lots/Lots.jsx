import React, { useState, useEffect } from 'react';
import './lots.css';

export default function Lots() {
  const [lots, setLots] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    fetch('http://localhost:3001/lots', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // console.log('КОНСОЛЬ В ЮЗ ЭФЕКТЕ');
        setLots(data);
      })
      .catch(console.log);

    // return () => console.log('ЮЗ ЭФЕКТ ТЕСТ');
  }, []);

  const handleDeleteLot = (e) => {
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
        // console.log(res);
        if (res.status === 'удалено') {
          // console.log('удалил лот из базы');
          setLots(lots.filter((el) => el.id !== +id));
        }
      }).catch(console.log);
  };

  const [form, setForm] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
  });

  const handleEditLot = (e) => {
    // console.log(e.target.id);
    setIsEdit(!isEdit);
    const targetLot = lots.find((el) => el.id === +e.target.id);
    // console.log(targetLot);
    setForm({
      id: targetLot.id,
      name: targetLot.name,
      price: targetLot.price,
      GameId: targetLot.GameId,
      CategoryId: targetLot.CategoryId,
      image: targetLot.image,
      description: targetLot.description,
    });
  };

  const handeleInput = (e) => {
    // console.log(e.target.name, e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log('ИЗМЕНЕННАЯ ФОРМА', form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/lots', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('ИЗМЕНЕННЫЙ ПРОДУКТ', data);
        setLots((arr) => arr.map((el) => {
          if (el.id === data.id) {
            return data;
          }
          return el;
        }));
      }).catch(console.log);
  };

  return (
    <div style={{ display: 'flex' }}>
<div>
  {lots && lots.map((lot) => (
    <div key={lot.id}>
      <div><img src={`http://localhost:3001/${lot.image}`} alt={lot.name} /></div>
      <div>Название: {lot.name}</div>
      <div>Цена: {lot.price} </div>
      <div>Описание: {lot.description}</div>
      {!lot.approved ? (<div>Статус: На рассмотрении</div>) : (null) }
      <div>Выставлен на продажу: {new Date(lot.updatedAt).toLocaleDateString()}</div>
      <button type="button" onClick={handleDeleteLot} id={lot.id}> Удалить</button>
      <button type="button" onClick={handleEditLot} id={lot.id}> Редактировать</button>
    </div>
  ))}
</div>
<div className={`${isEdit ? 'visible' : 'invisible'}`}>
Форма изменения
<form className="containerInput" onSubmit={handleSubmit}>
    <input onChange={handeleInput} name="name" value={form.name} placeholder="name" />
    <input onChange={handeleInput} name="price" value={form.price} placeholder="price" />
    <input onChange={handeleInput} name="image" value={form.image} placeholder="img" />
    <input onChange={handeleInput} name="description" value={form.description} placeholder="description" />
    <button type="submit">Отправить изменения</button>
</form>
</div>
    </div>
  );
}
