/* eslint-disable no-console */
import React, { useState } from 'react';
import './StyleAcc.css';

export default function ListAccCscreate() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    GameId: 1,
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
    fetch('http://localhost:3001/account/newLot/csgo/createAcc', {
      method: 'POST',
      credentials: 'include',

      body: data,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    setForm(form);
  };

  const testImg = (e) => {
    setImg(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <form className="containerInput" onSubmit={handleSubmit}>
        <input onChange={handeleInput} name="name" value={form.name} placeholder="name" />
        <input onChange={handeleInput} name="price" value={form.price} placeholder="price" />

        <input type="file" onChange={testImg} />

        <input onChange={handeleInput} name="description" value={form.description} placeholder="description" />
        <button type="submit">Submit</button>
    </form>
  );
}
