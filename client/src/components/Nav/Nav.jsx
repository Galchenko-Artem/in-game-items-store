/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout, userAvatar } from '../../store/actions/userAction';

export default function Nav() {
  const user = useSelector((store) => store.userStore);
  const [userBD, setUseBD] = useState(`${user?.image}`);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('http://localhost:3001/logout', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === 'success') { dispatch(userLogout(null)); }
        navigate('/');
      });
  };
  useEffect(() => {
    fetch('http://localhost:3001/account', {

      credentials: 'include',

    })
      .then((res) => res.json())
      .then((res) => {
        console.log('UseEffect...>>>', res);
        // dispatch(userAvatar(res.image));
        setUseBD(res.image);
      });
  }, []);

  return (
  <div className="nav-div">
    <Link className="nav-main" to="/">Главная</Link>
    <Link className="nav-main" to="/multer">Мультер</Link>
  {user.user ? (
    <>
    <Link className="nav-main" to="/support"> Поддержка </Link>

    <Link className="nav-main" to="/userPlea">Обращения пользователя</Link>

    <Link className="nav-main" to="/basket"> Корзина </Link>
     <Link className="nav-mainAvatar" to="/account"> Личный кабинет
    {user.image ? <p>Privet</p> : <img className="imgAvatar" src={`http://localhost:3001/${userBD && userBD}`} alt="Avatar" /> }
     </Link>

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
