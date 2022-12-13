import React from 'react';
import { Link } from 'react-router-dom';
import dota2 from './images/dota2.jpeg';
import wow from './images/wow.jpeg';
import csgo from './images/csgo.jpeg';

import './mainPage.css';

export default function MainPage() {
  return (
    <div className="mainContainer">
      <div className="card">
        <Link to="/dota2">
       <img className="img-card" src={dota2} alt="dota2" />
        </Link>
      </div>
      <div className="card">
      <Link to="/csgo">
        <img className="img-card" src={csgo} alt="csgo" />
      </Link>
      </div>
      <div className="card">
        <Link to="/wow">
        <img className="img-card" src={wow} alt="Word of Warcraft" />
        </Link>
      </div>
    </div>
  );
}
