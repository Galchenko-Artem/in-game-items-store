/* eslint-disable no-console */
import React, { useState } from 'react';
import style from './StyleAcc.module.css';

export default function ListAccDotaCreate() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    GameId: 3,
    CategoryId: 1,
    image: '',
    description: '',
  });
  const [img, setImg] = useState(null);

  const handeleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', img);
    data.append('form', JSON.stringify(form));
    fetch('http://localhost:3001/account/newLot/dota/createAcc', {
      method: 'POST',
      credentials: 'include',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: data,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    setForm(form);
    console.log(form);
  };
  const testImg = (e) => {
    setImg(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  console.log(img);

  return (
    <div className={style.form}>
<form className={style.containerInput} onSubmit={handleSubmit}>
              <h2>Создать лот на акаунт</h2>
        <input className={style.input} onChange={handeleInput} name="name" value={form.name} placeholder="Название" />
        <input className={style.input} onChange={handeleInput} name="price" value={form.price} placeholder="Цена" />
        <input className={style.inputMulter} type="file" onChange={testImg} />
        <textarea className={style.textarea} onChange={handeleInput} name="description" value={form.description} placeholder="Описание" />
        <button className={style.button} type="submit">Создать</button>
</form>
    </div>

  );
}
