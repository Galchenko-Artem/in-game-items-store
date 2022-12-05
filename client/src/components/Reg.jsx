import React, { useState } from 'react';
import './reg.css';

export default function Reg() {
  const [form, setForm] = useState({
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(((res) => console.log(res)));
  };
  return (
    <div className="regForm">
    <form onSubmit={handleSubmit}>
    <div className="inputForm">
    <label className="labelForm">Ваш логин:</label>
    <input className="inputReg" type="text" value={form.name} name="login" placeholder="..." onChange={handleInput} autoComplete="on" />
    </div>
    <div className="inputForm">
    <label className="labelForm">E-mail адрес</label>
    <input className="inputReg" type="email" value={form.email} name="email" placeholder="..." onChange={handleInput} autoComplete="on" />
    </div>
    <div className="inputForm">
    <label className="labelForm">Пароль:</label>
    <input className="inputReg" type="password" value={form.password} name="password" placeholder="..." onChange={handleInput} autoComplete="on" />
    </div>
    <div className="inputForm">
    <label className="labelForm">Повторите пароль</label>
    <input className="inputReg" type="password" value={form.repeatPassword} placeholder="..." name="repeatPassword" onChange={handleInput} autoComplete="on" />
    </div>
      <div className="btnSubmit">
    <button className="regBtn" type="submit">Submit</button>
      </div>
    </form>
    <div className="answerReg" />
    </div>
  );
}
