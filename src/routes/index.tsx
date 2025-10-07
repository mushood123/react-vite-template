import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Home, NotFound, Profile, SignIn, SignUp } from '../pages';
import { ProtectedRoutes } from './protected/protected';
import { PublicRoutes } from './public/public';

export const Navigation = ({ isLoggedIn }) => {
  return (
    <>
      <Routes>
        {/* Public Home Route */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard/profile" replace /> : <Home />}
        />

        {/* Protected */}
        <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
          <Route path="/dashboard" element={<Profile />} />
          <Route path="/dashboard/profile" element={<Profile />} />
        </Route>

        {/* Public */}
        <Route element={<PublicRoutes isLoggedIn={isLoggedIn} />}>
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
