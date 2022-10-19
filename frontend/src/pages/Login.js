import React, { useState } from 'react'
import {  Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { signin, authenticate, isAuthenticated, useUser} from './apiCore'
import "../components/login&create.css"


export default function Login() {
  const navigate = useNavigate();
  const users = useUser();
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
        }).then(
          redirectUser()
        )
    }

    const signInForm = () => (
      <div className='parentLoginForm'>
        <form className='formLoginBox'>
          <h2 className='control-text'>
            Iniciar sesión
          </h2>
          <div className='control-form'>
            <label className='text-muted'>Email</label>
            <input
             onChange={handleChange('email')}
             type="email"
             className="inputForm"
             value={email}
             />
          </div>
          <div className='control-form'>
            <label className='text-muted'>Password</label>
            <input
            onChange={handleChange('password')}
            type="password"
            className="inputForm"
            value={password}
            />
          </div>
          <div className='buttons'>
            <div >
              <button onClick={clickSubmit} className='buttonForm'>
                Entrar
              </button>
            </div>
            <div>
              <button className='buttonForm' onClick={(e) => navigate('/CreateAccount')}>Registrarse</button>
            </div>
          </div>
        </form>
      </div>
    )

    const redirectUser = () => {
      console.log("redirectUser", user);
      if (redirectToReferrer) {
        if (users && users.role === "ADMIN") {
          return <Navigate to="/AdminPanel" />
        } else {
          return <Navigate to="/mountainRout" />
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
      {showError()}
      {showLoading()}
      {redirectUser()}
      {signInForm()}
      </>

    )
  
} 