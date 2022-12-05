import React, { useState } from 'react';
import './reg.css';
import { useNavigate } from 'react-router-dom';

export default function Reg({ setUser }) {
  const [regMsg, setRegMsg] = useState(null);
  const navigate = useNavigate();
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
    fetch('http://localhost:3001/reg', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(((res) => {
        if (res.status === 'error') {
          console.log(res);
        } else if (res.status === 'success') {
          console.log(res);
          setRegMsg(res.msg);
          setUser({ login: res.login });
          setTimeout(() => {
            navigate('/');
          }, 1000);
        }
      }));
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
    <input className="inputReg" type="password" value={form.confirmPassword} placeholder="..." name="confirmPassword" onChange={handleInput} autoComplete="on" />
    </div>
      <div className="btnSubmit">
    <button className="regBtn" type="submit">Submit</button>
      </div>
      <div className="answerReg">{regMsg}</div>
    </form>

    </div>
  );
}
