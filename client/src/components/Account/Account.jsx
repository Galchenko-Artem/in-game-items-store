import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './account.css';
import AccountsAvatar from './AccountsAvatar/AccountsAvatar';

export default function Account() {
  return (
        <>
        <AccountsAvatar />
        <div>
            <h3>Личный кабинет</h3>
            <Link to="/account/lots"><button type="button">Мои лоты</button></Link>
            <Link to="/account/sales"><button type="button">Мои продажи</button></Link>
            <Link to="/account/newLot"><button type="button">Создать Новый лот</button></Link>
        </div>
        <Outlet />
        </>
  );
}
