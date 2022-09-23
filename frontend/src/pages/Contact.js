import React, { useState } from 'react'
import Navigation from './Navigation';
import { coments } from './apiCore';


export default function Contact() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    surname: '',
    description: '',
    error: '',
    loading: false
  });

  const { name, email, surname, description, loading, error } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }


  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true })
    coments({ name, email, surname, description })
      .then((data, e) => {
        if (data.error) {
          setValues({ ...values, error: data.error })
        } else {

          setValues({
            ...values
          })
        }
      })
  }

  const comentForm = () => (
    <form >
      <h2 >
        Contacta con nosotros
      </h2>
      <div >
        <label >Nombre</label>
        <input
          onChange={handleChange('name')}
          type="name"
          value={name}
        />
      </div>
      <div >
        <label>Apellidos</label>
        <input
          onChange={handleChange('surname')}
          type="surname"
          value={surname}
        />
      </div>
      <div >
        <label >Email</label>
        <input
          onChange={handleChange('email')}
          type="email"
          value={email}
        />
      </div>
      <div >
        <label placeholder='Dejanos tu comentario aquí para contactar contigo'></label>
        <input
          onChange={handleChange('description')}
          type="description"
          value={description}
        />
      </div>
      <div>
        <button onClick={clickSubmit}>
          Enviar
        </button>
      </div>
    </form>
  )

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
      <Navigation />
      {showError()}
      {showLoading()}
      {comentForm()}
    </>

  )

} 