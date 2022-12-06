import React, { useState } from 'react';
import './auth.css';

export default function Auth(setUser) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [answer, setAnswer] = useState(null);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/auth', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="authForm">
      <form onSubmit={handleSubmit}>
      <div className="inputForm">
      <label className="labelForm">Логин:</label>
      <input className="inputLog" type="email" value={form.email} name="email" onChange={handleInput} placeholder="..." required autoComplete="on" />
      </div>
      <div className="inputForm">
      <label className="labelForm">Пароль:</label>
      <input className="inputLog" type="password" value={form.password} name="password" placeholder="..." onChange={handleInput} required autoComplete="on" />
      </div>
      <div className="btnSubmit">
      <button className="authBtn" type="submit">Submit</button>
      </div>
      </form>
      <div className="answerAuth">
        {answer}
      </div>
    </div>
  );
}
