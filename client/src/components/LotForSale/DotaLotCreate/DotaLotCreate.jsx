import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import './StyleDotaLotCreate.css';

export default function DotaLotCreate() {
  return (
    <div>
        DotaLotCreate
        <Navbar />
        <Outlet />
    </div>
  );
}
