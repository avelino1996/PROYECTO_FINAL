import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation'

import "../components/Signup.css"
import { signup } from './apiCore';

const Signup = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    error: '',
    success: false
  })

  const { username, email, password, success, error } = values

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value }) 
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false })
    signup({ username, email, password })
    .then(data => { 
      if (data.error) {
        setValues({ ...values, error: data.error, success: false })
      } else {
        setValues({
          ...values,
          username: '',
          email: '',
          password: '',
          error: '',
          success: true
        })
      }
    })
  }

  const signUpForm = () => (
    <form className="sign-box">
      <div className='form-group'>
        <label className='text-muted'>Name</label>
        <input
          onChange={handleChange('username')}
          value={username}
          type='text'
          className='form-control'/>
      </div>
      <div className='form-group'>
        <label className='text-muted'>email</label>
        <input
          onChange={handleChange('email')}
          type='email'
          value={email}
          className='form-control'/>
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          onChange={handleChange('password')}
          value={password}
          type='password'
          className='form-control'/>
      </div>
      <button onClick={clickSubmit} className='btn btn-primary'>
        Sign Up
      </button>
    </form>
  );

  const showError = () => (
    <div className='alert alert-danger' style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
  )

  const showSuccess = () => (
    <div className='alert alert-info' style={{display: success ? '':'none'}}>  New Account Successfully Created You can now
      <Link to='/login'>Sign in</Link>
    </div>
  )

  return (
    <>
      <Navigation/>
      <div className="mt-5">
        <h4 className="text-center mb-5">Signup form</h4>
        {showError()}
        {showSuccess()}
        {signUpForm()}
      </div>
    </>
  )
}

export default Signup;