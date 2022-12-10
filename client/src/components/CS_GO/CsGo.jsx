import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

export default function CsGo() {
  const navigate = useNavigate();
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button type="button" onClick={() => navigate('/')}>Вернуться к играм</button>
      <NavBar />
    </div>
    <Outlet />
    </>
  );
}
