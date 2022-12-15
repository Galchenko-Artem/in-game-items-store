import React from 'react';
import { Link } from 'react-router-dom';
import style from './StyleSideBar.module.css';

export default function Sidebar() {
  return (
    <div className={style.containerSideBar}>
     <Link to="/account/newLot/csgo">
     <button>CSGo</button>
     </Link>
    <Link to="/account/newLot/dota">
    <button>Dota</button>
    </Link>
   <Link to="/account/newLot/wow">
   <button>WOW</button>
   </Link>
    </div>

  );
}
