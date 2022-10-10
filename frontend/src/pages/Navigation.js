import React from "react";

import { isAuthenticated, signout, useUser } from "./apiCore";


export default function Navigation(history) {

  const user = useUser();

  return (
    <div>
      {/*  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Inicio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" to="/history">
                Historia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/mountainRout">
                Rutas del club
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/Contact">
                Contacto
              </a>
            </li>
            {!isAuthenticated() && (
              <>
                <li className="nav-item">
                  <a className="nav-link" to="/Login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" to="/CreateAccount">
                    Crear cuenta
                  </a>
                </li>
              </>
            )}
            {isAuthenticated() && (
              <>
                {
                  user.role === "ADMIN" &&
                  <li className="nav-item">
                    <a
                      to="/adminPanel" className="nav-link">
                      Admin Panel                    </a>
                  </li>
                }
                <li className="nav-item">
                  <a
                    to="/"
                    onClick={() => signout()
                    } className="nav-link">
                    Logout
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/history">Historia del Club</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/mountainRout">Rutas del Club</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Contact">Contacto</a>
              </li>
              {!isAuthenticated() && (
              <>
                <li className="nav-item">
                  <a className="nav-link" to="/Login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" to="/CreateAccount">
                    Crear cuenta
                  </a>
                </li>
              </>
            )}
            {isAuthenticated() && (
              <>
                {
                  user.role === "ADMIN" &&
                  <li className="nav-item">
                    <a
                      to="/adminPanel" className="nav-link">
                      Admin Panel                    </a>
                  </li>
                }
                <li className="nav-item">
                  <a
                    to="/"
                    onClick={() => signout()
                    } className="nav-link">
                    Logout
                  </a>
                </li>
              </>
            )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};