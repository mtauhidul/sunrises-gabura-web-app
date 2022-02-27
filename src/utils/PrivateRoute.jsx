import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { id } = useParams();
  const isAuthenticated = window.sessionStorage.getItem('isAuthenticated');
  const token = window.sessionStorage.getItem('token');

  if (isAuthenticated && token) {
    return children;
  }

  return <Navigate to={`/login/${id}`} />;
};
export default PrivateRoute;
