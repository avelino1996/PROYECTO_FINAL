import React, { useState } from 'react'
import {  Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from './apiCore'
import "../components/login.css"
import Navigation from './Navigation';


export default function login() {
  const navigate = useNavigate();

    const [values, setValues] = useState({
      email: '',
      password: '',
      error: '',
      loading: false,
      redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
      setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = (event) => {
      event.preventDefault();
      setValues({ ...values, error: false, loading: true })
      signin({ email, password })
        .then(data => {
          if (data.error) {
            setValues({ ...values, error: data.error, loading: false })
          } else {
            authenticate(
              data, () => {
                setValues({
                  ...values,
                  redirectToReferrer: true
                })
              }
            )
          }
        })
    }

    const signInForm = () => (
      <form className='sign-box'>
        <h2 className='control-text'>
          Iniciar sesión
        </h2>
        <div className='control-form'>
          <label className='text-muted'>Email</label>
          <input 
           onChange={handleChange('email')}
           type="email"
           className="form-control"
           value={email}
           />
        </div>
        <div className='control-form'>
          <label className='text-muted'>Password</label>
          <input 
          onChange={handleChange('password')}
          type="password"
          className="form-control"
          value={password}
          />
        </div>
        <div className='control-form'>
          <button onClick={clickSubmit} className='btn btn-primary'>
            Entrar
          </button>
        </div>
        <div>
          registrarse
          <button onClick={(e) => navigate('/CreateAccount')}>regrsitrarse</button>
        </div>
      </form>
    )

    const redirectUser = () => {
      if (redirectToReferrer) {
        if (user && user.role === 1) {
          return <Navigate to="/login" />
        } else {
          return <Navigate to="/" />
        }
      }
      if (isAuthenticated()) {
        return <Navigate to="/" />
      }
    }

    const showError = () => (
      <div className="alert alert-danget" style={{ display: error ? '' : 'none' }}>
        {error}
      </div>
    )

    const showLoading = () => (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    )

    return (
      <>
      <Navigation/>
      {showError()}
      {showLoading()}
      {redirectUser()}
      {signInForm()}
      </>

    )
  
} 