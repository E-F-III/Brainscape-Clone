import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../../store/session';

import { createDemoClassThunk } from '../../../store/class';

import './SignUpFormModal.css'

const SignUpForm = () => {
  const history = useHistory()

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const [validationErrors, setValidationErrors] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const newErrors = []

    // Validation Errors go here
    if (/[^a-zA-Z]/.test(firstName)) newErrors.push('First Name must contain alpha characters only')
    if (/[^a-zA-Z]/.test(lastName)) newErrors.push('Last Name must contain alpha characters only')
    if (firstName.length > 15) newErrors.push('First name cannot be longer than 15 characters')
    if (lastName.length > 15) newErrors.push('Last name cannot be longer than 15 characters')
    // if (/[^a-zA-Z \-]/.test(firstName)) newErrors.push('First Name must contain alpha characters only (hyphens \'-\' and spaces \' \' are allowed)')
    // if (/[^a-zA-Z \-]/.test(lastName)) newErrors.push('Last Name must contain alpha characters only (hyphens \'-\' and spaces \' \' are allowed)')
    // if (!firstName) newErrors.push('Please provide a first name')
    // if (!lastName) newErrors.push('Please provide a last name')
    if (password !== repeatPassword) newErrors.push('Passwords do not match')

    setValidationErrors(newErrors)

  }, [firstName, lastName, email, password, repeatPassword])

  const onSignUp = async (e) => {
    e.preventDefault();

    setIsSubmitted(true)

    if (validationErrors.length) return

    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) {
        const newErrors = []

        for (const error of data) {
          newErrors.push(error.split(': ')[1])
        }

        setErrors(newErrors)
        return
      }

      // const data2 = await dispatch(createDemoClassThunk())
      await dispatch(createDemoClassThunk())
      setIsSubmitted(false)
      history.push('/dashboard')
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
      <div className='errors'>
          {isSubmitted && validationErrors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
      <form onSubmit={onSignUp}>
        <div className='input-container'>
          <input
            type='text'
            name='firstName'
            placeholder=" "
            onChange={updateFirstname}
            value={firstName}
            className='text-input'
            required={true}
            // pattern="[a-zA-Z ]+"
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
            // pattern="[a-zA-Z ]+"
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
