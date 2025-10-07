import React from 'react';
import { Navigate, Outlet } from 'react-router';

const PublicRoutes = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <Navigate to="/dashboard/profile" replace />;
  }
  return <Outlet />;
};

export { PublicRoutes };
