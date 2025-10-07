import React from 'react';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoutes = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/auth/signin" replace />;
  }
  return <Outlet />;
};

export { ProtectedRoutes };
