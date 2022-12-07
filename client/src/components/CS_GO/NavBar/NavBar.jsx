/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import './StyleNavbar.css';

export default function NavBar() {
  return (
    <div className="contanerNavbar">
    <Link to="/csGo/listOfAccounts">
        <button> Список Аккаунтов </button>
    </Link>
    <Link to="/csGo/skins">
      <button>Скины</button>
    </Link>
    <Link to="/csGo/services">
       <button>Услуги</button>
    </Link>
    </div>
  );
}
