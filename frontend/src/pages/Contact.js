import React, { useState } from 'react'
import Navigation from './Navigation';
import { coments } from './apiCore';
import "../components/contact.css"


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
    <div className='formContactParent'>
      <form className='formContact'>
        <h2 className='tittleForm'>
          Contacta con nosotros
        </h2>
        <div className='formContactChild'>
          <label className='labelForm' >Nombre</label>
          <input
            className='inputForm'
            onChange={handleChange('name')}
            type="name"
            value={name}
          />
        </div>
        <div className='formContactChild'>
          <label className='labelForm'>Apellidos</label>
          <input
            className='inputForm'
            onChange={handleChange('surname')}
            type="surname"
            value={surname}
          />
        </div>
        <div className='formContactChild'>
          <label className='labelForm' >Email</label>
          <input
            className='inputForm'
            onChange={handleChange('email')}
            type="email"
            value={email}
          />
        </div>
        <div className='formContactChild'>
          <label className='labelForm' >Deja tu comentario aqui</label>
          <input
            className='lastInputForm'
            onChange={handleChange('description')}
            type="description"
            value={description}
          />
        </div>
        <div className='formContactChild'>
          <button className='buttonForm' onClick={clickSubmit}>
            Enviar
          </button>
        </div>
      </form>
      <div className='chats'>
        <div className='chatsChild'>
          <div className='logoFace'>
            <h5>Enlace a nuestra cuenta de Facebook</h5>
            <img src="https://cdn-icons-png.flaticon.com/64/1051/1051360.png" alt="" />
          </div>
          <div className='logoInsta'>
            <h5>Enlace a nuestra cuenta de Instagram</h5>
            <img src="https://cdn-icons-png.flaticon.com/64/87/87390.png" alt="" />
          </div>
        </div>
        <div>
          <h5>Dirección</h5>
        </div>
      </div>
    </div>
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