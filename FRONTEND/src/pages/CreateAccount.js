import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../components/css/login&create.css"

import "../components/css/Signup.css"
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
    <div className='parentCreateForm'>
      <form className="formCreateBox">
        <h2 className="control-text">Registrarse
        </h2>
        <div className='control-form'>
          <label className='text-muted'>Name</label>
          <input
            onChange={handleChange('username')}
            value={username}
            type='text'
            className='inputForm'/>
        </div>
        <div className='control-form'>
          <label className='text-muted'>Email</label>
          <input
            onChange={handleChange('email')}
            type='email'
            value={email}
            className='inputForm'/>
        </div>
        <div className='control-form'>
          <label className='text-muted'>Password</label>
          <input
            onChange={handleChange('password')}
            value={password}
            type='password'
            className='inputForm'/>
        </div>
        <div className='buttons'>
          <button onClick={clickSubmit} className='buttonForm'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );

  const showError = () => (
    <div className='alert alert-danger' style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
  )

  const showSuccess = () => (
    <div className='alert alert-dark' style={{display: success ? '':'none'}}>  Nueva cuenta creada satisfactoriamente, ya puedes entrar desde la página {"   "}
      <Link className='tittle' to='/login'>Login</Link>
    </div>
  )

  return (
    <>
        {showError()}
        {showSuccess()}
        {signUpForm()}
      
    </>
  )
}

export default Signup;