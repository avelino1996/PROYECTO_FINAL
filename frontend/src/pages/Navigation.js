import React from 'react'
import { useRoutes } from 'react-router';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser';

export default function Navigation() {
  const { isLogged, logout } = useUser()
  const [match] = useRoutes("/login");

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  const renderLoginButtons = ({ isLogged }) => {
    return isLogged
      ? <>
        <Link to='/home'>
          Home
        </Link>
        <Link to='/history'>
          Historia
        </Link>
        <Link to='/mountainRout'>
          Rutas del club
        </Link>
        <Link to='/contact'>
          Contact
        </Link>
        <Link to='/home' onClick={handleClick}>
          Logout
        </Link>
      </>
      : <>
        <Link to='/home'>
          Home
        </Link>
        <Link to='/history'>
          Historia
        </Link>
        <Link to='/mountainRout'>
          Rutas del club
        </Link>
        <Link to='/contact'>
          Contact
        </Link>
        <Link to='/login'>
          Login
        </Link>
        <Link to='/register'>
          Register
        </Link>
      </>
  }

  const content = match
    ? null
    : renderLoginButtons({ isLogged })

  return (
    <header className='gf-header'>
      {content}
    </header>
  )
}
