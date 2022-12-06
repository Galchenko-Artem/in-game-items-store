import React from 'react';
import { Link } from 'react-router-dom';

import './mainPage.css';

export default function MainPage() {
  return (
    <div className="container">
      <div className="card">
        <Link to="/dota2">
       <img className="img-card" src="https://upload.wikimedia.org/wikipedia/ru/8/8e/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Dota_2.jpg" alt="" />
        </Link>
      </div>
      <div className="card">
      <Link to="/csgo">
        <img className="img-card" src="https://www.digiseller.ru/preview/988672/p1_3258494_b4dd2956.jpg" alt="" />
      </Link>
      </div>
      <div className="card">
        <Link to="/wow">
        <img className="img-card" src="https://m.media-amazon.com/images/I/81feWhChfIL.jpg" alt="" />
        </Link>
      </div>
    </div>
  );
}
