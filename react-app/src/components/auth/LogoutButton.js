import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

import './LogOutButton.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <div id='logout-button' onClick={onLogout}>Logout</div>;
};

export default LogoutButton;
