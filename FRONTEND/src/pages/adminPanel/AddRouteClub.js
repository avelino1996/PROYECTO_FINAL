import React, { useEffect, useState } from 'react';
import { URL_ROUTES } from '../../config'; 
import axios from 'axios';
import "../../components/css/addPublication.css"



const AddRouteClub = () => {
  const [values, setValues] = useState({
    tittle: '',
    description: '',
    distance: '',
    dayAt: '',
    routeNumber: '',
    photo: '',
    loading: false,
    error: '',
    formData: ''
  })  

  const {
    tittle,
    description,
    distance,
    dayAt,
    routeNumber,
    loading,
    error,
    formData
  } = values;

  useEffect(() => {
    setValues({...values, formData: new FormData()});
  }, [values]); 
 

  const handleChange = name => event => {
    let value = null;
    if (name==="photo") {
      value = event.target.files[0] 
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result);
        formData.set(name, reader.result)
        setValues({ ...values, [name]: reader.result })
      }
      reader.readAsDataURL(value)
  }else{
   value =  event.target.value
   formData.set(name, value)
   setValues({ ...values, [name]: value })
  }


  }

  const clickSubmit = async (event) => {
    event.preventDefault()
    console.log("Creando Ruta", `${URL_ROUTES}/createRout`);
    await axios.post(`${URL_ROUTES}/createRout`, values);
    event.preventDefault()
    
  }

  const newRouteForm = () => (
    <form className='mb-3' >
      <h4>Añadir Foto</h4>
      <div className='form-group'>
        <label className='btn btn-secondary'>
          <input
            onChange={handleChange('photo')}
            type='file'
            name='photo'
            accept='image/*'
          />
        </label>
      </div>
      <div className='form-group'>
        <label className='text-muted'>Título</label>
        <input
          onChange={handleChange('tittle')}
          type='text'
          className='form-control'
          value={tittle}
        />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Descripción de la ruta</label>
        <input
          onChange={handleChange('description')}
          type='text'
          className='form-control'
          value={description}
        />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Distancia</label>
        <input
          onChange={handleChange('distance')}
          type='text'
          className='form-control'
          value={distance}
        />
      </div>
      <div className='form-group'>
        <label className='text-muted'>¿Qué día es la ruta?</label>
        <input
          onChange={handleChange('dayAt')}
          type='text'
          className='form-control'
          value={dayAt}
        />
      </div>
      
      <div className='form-group'>
        <label className='text-muted'>Número de ruta</label>
        <input
          onChange={handleChange('routeNumber')}
          type='text'
          className='form-control'
          value={routeNumber}
        />
      </div>
      <button className='btn btn-outline-primary' onClick={clickSubmit}>Crear ruta</button>
    </form>
  )

    const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  )

  const showLoading = () =>
    loading && (
      <div className='alert alert-success'>
        <h2>Loading ...</h2>
      </div>
    )

  return (
    <>
      <div className="formContainer">
        <div className="addRow">
          <div className="col-md-8 offset-md-2">
            {showLoading()}
            {showError()}
            {newRouteForm()}
          </div>
        </div>
      </div>
    </>
  )
}

export default AddRouteClub;