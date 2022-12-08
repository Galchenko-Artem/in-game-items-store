/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import './StyleNavbar.css';

export default function NavBar() {
  return (
    <div className="contanerNavbar">
    <Link to="/dota2/listOfAccounts">
        <button> Список Аккаунтов </button>
    </Link>
    <Link to="/dota2/skins">
      <button>Скины</button>
    </Link>
    <Link to="/dota2/services">
       <button>Услуги</button>
    </Link>
    </div>
  );
}
