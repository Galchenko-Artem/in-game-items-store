import React, { useState } from 'react';

export default function ServicesWow() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    GameId: 2,
    CategoryId: 3,
    image: '',
    description: '',
  });

  const handeleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/account/newLot/wow/servicesCreate', {
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
