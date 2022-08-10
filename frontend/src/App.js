import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import {Inicio} from './pages/Inicio';
import {History} from './pages/history';
import MountainRout from './pages/mountainRout'

export default function App() {
  return (
    <div>
      <BrowserRouter>

        <nav className='navbar px-5 py-3 bd-dark'>
        <NavLink to={"/"}>Inicio</NavLink>
        <NavLink to={"history"}>Historia</NavLink>
        <NavLink to={"mountainRout"}>Rutas del club</NavLink>
        </nav>

        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="history" element={ <History /> } />
          <Route path="mountainRout" element={<MountainRout/>} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}