import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';

import './SignUpFormModal.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const [validationErrors, setValidationErrors] = useState([])

  useEffect(() => {
    const newErrors = []

    // Validation Errors go here

    setValidationErrors(newErrors)

  }, [firstName, lastName, email, password, repeatPassword])

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastname = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div id='signup-header'>Get Started</div>
      <form onSubmit={onSignUp}>
        <div className='errors'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>

        <div className='input-container'>
          <input
            type='text'
            name='firstName'
            placeholder=" "
            onChange={updateFirstname}
            value={firstName}
            className='text-input'
            required={true}
          ></input>
          <label>First Name</label>
        </div>

        <div className='input-container'>
          <input
            type='text'
            name='lastName'
            placeholder=" "
            onChange={updateLastname}
            value={lastName}
            className='text-input'
            required={true}
          ></input>
          <label>Last Name</label>
        </div>

        <div className='input-container'>
          <input
            type='email'
            name='email'
            placeholder=" "
            onChange={updateEmail}
            value={email}
            className='text-input'
            required={true}
          ></input>
          <label>Email</label>
        </div>

        <div className='input-container'>
          <input
            type='password'
            name='password'
            placeholder=" "
            onChange={updatePassword}
            value={password}
            required={true}
            className='text-input'
          ></input>
          <label>Password</label>
        </div>

        <div className='input-container'>
          <input
            type='password'
            name='repeat_password'
            placeholder=" "
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            className='text-input'
          ></input>
          <label>Repeat Password</label>
        </div>

        <div className='modal-buttons'>
          {/* <div onClick={onSignUp} className="pill-button modal-button">Sign Up</div> */}
          <button type='submit' className="pill-button modal-button">Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
