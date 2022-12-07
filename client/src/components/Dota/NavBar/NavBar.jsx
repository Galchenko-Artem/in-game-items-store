/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import './StyleNavbar.css';

export default function NavBar() {
  return (
    <div className="contanerNavbar">
    <Link to="/dota/listOfAccounts">
        <button> Список Аккаунтов </button>
    </Link>
    <Link to="/dota/skins">
      <button>Скины</button>
    </Link>
    <Link to="/dota/services">
       <button>Услуги</button>
    </Link>
    </div>
  );
}
