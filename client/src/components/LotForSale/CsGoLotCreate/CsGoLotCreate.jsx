import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import './StyleCsLotCreate.css';

export default function CsGoLotCreate() {
  return (
    <div className="create-Nav">
      CsGoLotCreate
    <Navbar />
    <Outlet />
    </div>
  );
}
