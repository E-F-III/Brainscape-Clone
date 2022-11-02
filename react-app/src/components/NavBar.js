
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import LoginFormModal from './auth/LoginFormModal';
import LogoutButton from './auth/LogoutButton';
import SignUpFormModal from './auth/SignUpFormModal';

import transparentlogo from '../assets/l3.png'

import './NavBar.css'

const NavBar = () => {
  const history = useHistory()

  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <div id='login-button' onClick={() => history.push('/dashboard')}>My Classes</div>
        <LogoutButton />
      </>
    )
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignUpFormModal />
      </>
    )
  }

  return (
    <nav>
      <div id='nav-bar-logo-container'>
        <NavLink to='/' exact={true} activeClassName='active'>
          {/* <img id='nav-bar-logo' src='https://www.brainscape.com/assets/cms/public-views/shared/Brainscape-logo.svg' /> */}
          <img id='nav-bar-logo-v2' alt='nav-bar-logo-v2' src={transparentlogo} />
        </NavLink>
      </div>
      <div id='auth-buttons'>
        {sessionLinks}
      </div>

    </nav>
  );
}

export default NavBar;
