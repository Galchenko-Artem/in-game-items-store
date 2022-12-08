import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './account.css';

export default function Account() {
  return (
        <>
        <div>
            <h3>Личный кабинет</h3>
            <Link to="/account/lots"><button type="button">Мои лоты</button></Link>
            <Link to="/account/sales"><button type="button">Мои продажи</button></Link>
        </div>
        <Outlet />
        </>
  );
}
