/* eslint-disable no-console */
import React, { useState } from 'react';
import './StyleAcc.css';

export default function ListAccDotaCreate() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    GameId: 3,
    CategoryId: 1,
    image: '',
    description: '',
  });

  const handeleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/newLot/dota/createAcc', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json());
    setForm(form);
    console.log(form);
  };

  return (
    <form className="containerInput" onSubmit={handleSubmit}>
        <input onChange={handeleInput} name="name" value={form.name} placeholder="name" />
        <input onChange={handeleInput} name="price" value={form.price} placeholder="price" />
        <input onChange={handeleInput} name="image" value={form.image} placeholder="img" />
        <input onChange={handeleInput} name="description" value={form.description} placeholder="description" />
        <button type="submit">Submit</button>
    </form>
  );
}
