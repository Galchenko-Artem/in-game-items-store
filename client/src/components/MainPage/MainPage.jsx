import React from 'react';
import { Link } from 'react-router-dom';

import './mainPage.css';

export default function MainPage() {
  return (
    <div className="container">
      <div className="card">
        <Link to="/dota2">
       <img className="img-card" src="/static/media/dota2.71d3acb6eeab27cf86fd.jpeg" alt="dota2" />
        </Link>
      </div>
      <div className="card">
      <Link to="/csgo">
        <img className="img-card" src="/static/media/csgo.f22432638a2e8a453567.jpeg" alt="csgo" />
      </Link>
      </div>
      <div className="card">
        <Link to="/wow">
        <img className="img-card" src="/static/media/wow.f5895ac0e9a9f5c07264.jpeg" alt="Word of Warcraft" />
        </Link>
      </div>
    </div>
  );
}
