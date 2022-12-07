/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import './StyleNavbar.css';

export default function NavBar() {
  return (
    <div className="contanerNavbar">
    <Link to="/wow/listOfAccounts">
        <button> Список Аккаунтов </button>
    </Link>
    <Link to="/wow/items">
      <button>Предметы</button>
    </Link>
    <Link to="/wow/services">
       <button>Услуги</button>
    </Link>
    </div>
  );
}
