/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout, userAvatar } from '../../store/actions/userAction';
import { basketLogout } from '../../store/actions/basketAction';

export default function Nav() {
  const user = useSelector((store) => store.userStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('http://localhost:3001/logout', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === 'success') {
          dispatch(userLogout(null));
          dispatch(basketLogout([]));
        }
        navigate('/');
      });
  };
  // useEffect(() => {
  //   fetch('http://localhost:3001/account', {

  //     credentials: 'include',

  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setTimeout(() => {
  //         console.log(res.image, 'nav useeffect');
  //         dispatch(userAvatar(res.image));
  //         setUseBD(res.image);
  //       }, 50);
  //     });
  // }, []);

  return (

  <div className="nav-div">
    <div className="wrapper">
  <div className="container">
    <h1>Game Store</h1>
  </div>
    </div>
    <Link className="nav-main" to="/">Главная</Link>
    <Link className="nav-main" to="/multer">Мультер</Link>
  {user.user ? (
    <>
    <Link className="nav-main" to="/support"> Поддержка </Link>

    <Link className="nav-main" to="/userPlea">Обращения пользователя</Link>
    <Link className="nav-main" to="/basket"> Корзина </Link>
     <Link className="nav-mainAvatar" to="/account"> Личный кабинет
    {!user.user.image ? <p>Privet</p> : <img className="imgAvatar" src={`http://localhost:3001/${user.user?.image && user.user?.image}`} alt="Avatar" /> }
     </Link>

 <button className="logout-btn" onClick={handleLogout} type="button">Выйти</button>

 {user.user.isAdmin && <Link className="nav-main" to="/admin"> Админ </Link>}
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
