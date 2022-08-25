import React from 'react'
import "./components/login.css"

export default function CreateAcoount() {
  return (
    <form className ='sign-box'>
      <h2 className='control-text'>
            Crear usuario
        </h2>
      <div className='control-form'>
        <label className ='text-muted'>Name</label>
        <input type ="text" 
          className ='form-control'/>
      </div>
      <div className='control-form'>
        <label className ='text-muted'>Email</label>
        <input type ="email" 
          className ='form-control'/>
      </div>
      <div className='control-form'>
        <label className ='text-muted'>Password</label>
        <input type ="password" 
          className = 'form-control'/>
      </div>
      <div className='control-form'>
        <button className ='btn btn-primary'>
          crear
        </button>
      </div>
    </form>
  )
}
