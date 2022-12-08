import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import './StyleNewLot.css';

export default function NewLot() {
  return (
    <div className="container">
    <Sidebar />
    <Outlet />
    </div>
  );
}
