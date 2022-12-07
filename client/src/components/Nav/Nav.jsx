/* eslint-disable no-console */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    <>
    <Link className="nav-main" to="/">Главная</Link>
  {user ? (
 <button onClick={handleLogout} type="button">Выйти</button>
  ) : (
    <Link className="nav-main" to="/reg">Регистрация</Link>
  )}
    </>
  );
}
