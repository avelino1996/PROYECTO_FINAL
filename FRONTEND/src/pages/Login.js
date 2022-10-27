import React, { useState } from 'react'
import {  Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { signin, authenticate, isAuthenticated, useUser} from './apiCore'
import "../components/css/login&create.css"
import { useUserContext } from '../App.state';



export default function Login() {
  const {updateUserData} = useUserContext();
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
          if(data.ok){
            authenticate(
              data, () => {
                updateUserData(values);
                setValues({
                  ...values,
                  redirectToReferrer: true
                })
              }
            )
          }else{
            setValues({ ...values, error: data.error.message, loading: false, redirectToReferrer: false })
          }
        })
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
      if (redirectToReferrer) {
        if (users && users.role === "ADMIN") {
          return <Navigate to="/AdminPanel" />
        } else {
          return <Navigate to="/" />
        }
      }
      if (user && isAuthenticated()) {
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
      {signInForm()}
      {redirectUser()}
      </>

    )
  
} 