import React from "react";
import { isAuthenticated, signout, useUser } from "./apiCore";
import "../components/navigation.css"

export default function Navigation(history) {

  const user = useUser();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <div className="components-Nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/history">Historia del Club</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/mountainRout">Rutas del Club</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contact">Contacto</a>
                </li>
              </div>
              <div className="components-Nav">
                {!isAuthenticated() && (
                  <div className="logcre">
                    <li className="nav-item">
                      <a className="nav-link" href="/Login">
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/CreateAccount">
                        Crear cuenta
                      </a>
                    </li>
                  </div>
                )}
                {isAuthenticated() && (
                  <>
                    {
                      user.role === "ADMIN" &&
                      <li className="nav-item">
                        <a
                          href="/adminPanel" className="nav-link">
                          Admin Panel                    </a>
                      </li>
                    }
                    <li className="nav-last">
                      <a
                        href="/"
                        onClick={() => signout()
                        } className="nav-link">
                        Logout {" "}{"  "}
                        <img src="https://cdn-icons-png.flaticon.com/24/5509/5509597.png" alt="" className="image-logout" />
                      </a>
                    </li>
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};