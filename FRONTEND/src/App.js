import React,{useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { History } from './pages/history';
import Contact from './pages/Contact';
import { MountainRout } from './pages/mountainRout';
import Login from './pages/Login'
import CreateAcount from './pages/CreateAccount'
import { AdminPanel } from './pages/adminPanel/AdminPanel';
import { ProtectedRoute } from './pages/apiCore';
import Footer from './pages/footer';
import Navigation from './pages/Navigation';
import { UserContext } from './App.state';


export default function App() {
  const [userData, setUserData] = useState({ })


  return (
    <UserContext.Provider value={{actualUser:userData, updateUserData: setUserData}}>
      <div>
        <div className='App-header'>

        </div>
        <Navigation />
        <div className='parent-app'>
          <div className='child-app'>
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="history" element={<History />} />
                <Route path="mountainRout" element={<MountainRout />} />
                <Route path="contact" element={<Contact />} />
                <Route path="Login" element={<Login />} />
                <Route path="CreateAccount" element={<CreateAcount />} />
                <Route path="AdminPanel/*" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
              </Routes>
            </BrowserRouter>
          </div>
          <Footer />
        </div>
      </div>
      </UserContext.Provider>
  )
}