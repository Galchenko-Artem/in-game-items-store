import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

export default function Dota() {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  );
}
