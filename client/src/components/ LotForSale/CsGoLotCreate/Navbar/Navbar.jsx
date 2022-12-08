import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <Link to="/newLot/csgo/createAcc">Добавить лот на аккаунт</Link>
    <Link to="/newLot/csgo/skinsCreate">Добавить лот на скин</Link>
    <Link to="/newLot/csgo/servicesCreate">Добавить лот на услуги</Link>
    </>
  );
}
