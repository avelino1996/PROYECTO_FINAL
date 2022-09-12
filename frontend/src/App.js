import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { History } from './pages/history';
import { Contact } from './pages/Contact';
import { MountainRout } from './pages/mountainRout'; 
import Login from './pages/Login'
import CreateAcount from './pages/CreateAccount'

export default function App() {
  return (
    <div>
      <div className='App-header'>
        
      </div>
      <div >
        <BrowserRouter>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="history" element={<History />} />
            <Route path="mountainRout" element={<MountainRout />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Login" element={<Login />} />
            <Route path="CreateAccount" element={<CreateAcount />} />

          </Routes>

        </BrowserRouter>
      </div>
    </div>
  )
}