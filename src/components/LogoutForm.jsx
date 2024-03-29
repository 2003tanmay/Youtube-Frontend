import React from 'react';
import authService from '../services/auth.service.js';
import { useDispatch } from 'react-redux';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await authService.logoutAuth(dispatch);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;