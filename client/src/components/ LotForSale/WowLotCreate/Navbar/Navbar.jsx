import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <Link to="/newLot/wow/createAcc">Добавить лот на аккаунт</Link>
    <Link to="/newLot/wow/skinsCreate">Добавить лот на предмет</Link>
    <Link to="/newLot/wow/servicesCreate">Добавить лот на услуги</Link>
    </>
  );
}
