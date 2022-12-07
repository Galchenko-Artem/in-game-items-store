import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

export default function WOW() {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  );
}
