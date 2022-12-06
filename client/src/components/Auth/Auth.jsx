import React, { useState } from 'react';
import './auth.css';
import { useNavigate } from 'react-router-dom';

export default function Auth({ setUser }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    login: '',
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
        if (res.status === 'error') {
          setAnswer(res.msg);
        }
        if (res.status === 'success') {
          setAnswer(res.msg);
          setUser({ login: res.login });
          setTimeout(() => {
            navigate('/');
          }, 1000);
        }
      });
  };

  return (
    <div className="authForm">
      <form onSubmit={handleSubmit}>
      <div className="inputForm">
      <label className="labelForm">Логин:</label>
      <input className="inputLog" type="text" value={form.login} name="login" onChange={handleInput} placeholder="..." autoComplete="on" />
      </div>
      <div className="inputForm">
      <label className="labelForm">Пароль:</label>
      <input className="inputLog" type="password" value={form.password} name="password" placeholder="..." onChange={handleInput} autoComplete="on" />
      </div>
      <div className="btnSubmit">
      <button className="authBtn" type="submit">Submit</button>
      </div>
      <div className="answerAuth">
        {answer}
      </div>
      </form>
    </div>
  );
}
