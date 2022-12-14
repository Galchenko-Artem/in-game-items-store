import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import style from './StyleCs.module.css';

export default function CsGo() {
  const navigate = useNavigate();
  return (
    <>
    <div className={style.containerCs}>
      <button type="button" onClick={() => navigate('/')}>Вернуться к играм</button>
      <NavBar />
    </div>
    <Outlet />
    </>
  );
}
