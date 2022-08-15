import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { Home } from './pages/home';
import { History } from './pages/history';
import { Contact } from './pages/Contact';
import MountainRout from './pages/mountainRout'

export default function App() {
  return (
    <div>
      <div className='App-header'>
        
      </div>
      <div >
        <BrowserRouter>

          <nav className='navBar'>
            <NavLink to={"/"} className='navLink'>Inicio</NavLink>
            <NavLink to={"history"} className='navLink'>Historia</NavLink>
            <NavLink to={"mountainRout"} className='navLink'>Rutas del club</NavLink>
            <NavLink to={"contact"} className='navLink'>Contacto</NavLink>
          </nav>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="history" element={<History />} />
            <Route path="mountainRout" element={<MountainRout />} />
            <Route path="contact" element={<Contact />} />
          </Routes>

        </BrowserRouter>
      </div>
    </div>
  )
}