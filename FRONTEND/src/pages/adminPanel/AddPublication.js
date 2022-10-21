import React, { useEffect, useState } from 'react';
import { URL_PUBLICATIONS } from '../../config';
import axios from 'axios';
import "../../components/css/addPublication.css"


const AddPublication = () => {
  const [values, setValues] = useState({
    tittle: '',
    description: '',
    distance: '',
    createBy: '',
    publicationNumber: '',
    photo: '',
    loading: false,
    error: '',
    formData: ''
  })  

  const {
    tittle,
    description,
    distance,
    createBy,
    publicationNumber,
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
    console.log("Creando publicación", `${URL_PUBLICATIONS}/createPublication`);
    await axios.post(`${URL_PUBLICATIONS}/createPublication`, values);
    event.preventDefault()
    
  }

  const newPublicationForm = () => (
    <form className='mb-3' >
      <label className='text-muted'>Añadir foto</label>
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
        <label className='text-muted'>Creado por</label>
        <input
          onChange={handleChange('createBy')}
          type='text'
          className='form-control'
          value={createBy}
        />
      </div>
      
      <div className='form-group'>
        <label className='text-muted'>Número de publicación</label>
        <input
          onChange={handleChange('publicationNumber')}
          type='text'
          className='form-control'
          value={publicationNumber}
        />
      </div>
      <button className='btn btn-outline-primary' onClick={clickSubmit}>Crear publicación</button>
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
            {newPublicationForm()}
          </div>
        </div>
      </div>
    </>
  )
}

export default AddPublication;