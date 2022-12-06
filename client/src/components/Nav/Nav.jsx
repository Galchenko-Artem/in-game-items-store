import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';

export default function Nav({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('http://localhost:3001/logout', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === 'success') { setUser(null); }
        navigate('/');
      });
  };

  return (
  <div className="nav-div">
    <Link className="nav-main" to="/">Главная</Link>
  {user ? (
    <>
    <Link className="nav-main" to="/support"> Поддержка </Link>
 <button className="logout-btn" onClick={handleLogout} type="button">Выйти</button>
    </>
  ) : (
    <>
    <Link className="nav-main" to="/reg">Регистрация</Link>
    <Link className="nav-main" to="/auth">Авторизация</Link>
    </>
  )}
  </div>
  );
}
