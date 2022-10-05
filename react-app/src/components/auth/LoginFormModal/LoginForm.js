import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import { login } from '../../../store/session';

const LoginForm = () => {
  const history = useHistory()

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
      return
    }

    history.push('/dashboard')
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleDemo = async e => {
      setEmail('demo@aa.io');
      setPassword('password');
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div id='signin-header'>Log In</div>
      <form onSubmit={onLogin}>
        <div className='errors'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='input-container'>
          <input
            name='email'
            type='email'
            placeholder=" "
            value={email}
            onChange={updateEmail}
            className='text-input'
            required
          />
          <label>Email</label>
        </div>

        <div className='input-container'>
          <input
            name='password'
            type='password'
            placeholder=" "
            value={password}
            onChange={updatePassword}
            className='text-input'
            required
          />
          <label>Password</label>
        </div>

        <div className='modal-buttons'>
          {/* <div onClick={onLogin} className="pill-button modal-button">Log In</div> */}
          <button type='submit' className="pill-button modal-button">Log In</button>
          <p>or</p>
          <button type='submit' onClick={handleDemo} className="pill-button modal-button">Demo Log In</button>
        </div>

      </form>
    </>

  );
};

export default LoginForm;
