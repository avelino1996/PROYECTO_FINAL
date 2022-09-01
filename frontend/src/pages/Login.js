import React, { useState } from "react";
import { useNavigate } from "react-router";
import useUser from "../hooks/useUser";
import { useEffect } from "react";

export default function Login({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, navigate] = useNavigate()
  const {isLoginLoading, hasLoginError, login, isLogged} = useUser()

  useEffect(() => {
    if (isLogged) {
      navigate('/home')
      onLogin && onLogin()
    }
  }, [isLogged, navigate, onLogin])

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password })
  };

  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <form className='form' onSubmit={handleSubmit}>
          <label>
            email
            <input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          </label>

          <label>
            password
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>

          <button className='btn'>Login</button>
        </form>
      }
      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }
    </>
  );
}