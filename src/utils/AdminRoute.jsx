import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const isAuthenticated = window.sessionStorage.getItem('isAuthenticated');
  const token = window.sessionStorage.getItem('token');

  if (isAuthenticated && token) {
    return children;
  }

  return <Navigate to={`/admin_login`} />;
};
export default AdminRoute;
