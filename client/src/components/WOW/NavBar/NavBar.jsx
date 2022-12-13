/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import './StyleNavbar.css';
import Logo from '../img/world-of-warcraft.svg';

export default function NavBar() {
  return (
    <div className="contanerNavbar">
      <img className="Logo" src={Logo} alt="logo" />
    <Link to="/wow/listOfAccounts">
        <button> Список Аккаунтов </button>
    </Link>
    <Link to="/wow/items">
      <button>Предметы</button>
    </Link>
    <Link to="/wow/services">
       <button>Услуги</button>
    </Link>
    <Link to="/">
       <button>Вернуться к играм</button>
    </Link>
    </div>
  );
}
