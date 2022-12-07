import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRouter({ redirectPath = '/' }) {
  const user = useSelector((store) => store.userStore);
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return (
    <Outlet />
  );
}
