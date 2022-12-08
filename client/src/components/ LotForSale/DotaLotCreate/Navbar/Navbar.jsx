import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <Link to="/newLot/dota/createAcc">Добавить лот на аккаунт</Link>
    <Link to="/newLot/dota/skinsCreate">Добавить лот на скин</Link>
    <Link to="/newLot/dota/servicesCreate">Добавить лот на услуги</Link>
    </>
  );
}
