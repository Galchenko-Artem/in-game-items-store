import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import './StyleWowLotCreate.css';

export default function WowLotCreate() {
  return (
    <div className="create-Nav">
        WowLotCreate
        <Navbar />
        <Outlet />
    </div>
  );
}
