
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import LoginFormModal from './auth/LoginFormModal';
import LogoutButton from './auth/LogoutButton';

import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (

  //   )
  // }

  return (
    <nav>
      <div id='nav-bar-logo-container'>
        <NavLink to='/' exact={true} activeClassName='active'>
          <img id='nav-bar-logo' src='https://www.brainscape.com/assets/cms/public-views/shared/Brainscape-logo.svg'/>
        </NavLink>
      </div>
      <div id=''>
        <LoginFormModal />
        {/* <LogoutButton /> */}
      </div>

    </nav>
  );
}

export default NavBar;
