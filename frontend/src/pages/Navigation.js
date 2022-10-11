import React from "react";

import { isAuthenticated, signout, useUser } from "./apiCore";


export default function Navigation(history) {

  const user = useUser();

  return (
    <div>
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
                <li class="nav-item">
                  <a class="nav-link" href="/Login">
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/CreateAccount">
                    Crear cuenta
                  </a>
                </li>
              </>
            )}
            {isAuthenticated() && (
              <>
                {
                  user.role === "ADMIN" &&
                  <li class="nav-item">
                    <a 
                      href="/adminPanel" class="nav-link">
                      Admin Panel                    </a>
                  </li>
                }
                <li class="nav-item">
                  <a
                    href="/"
                    onClick={() => signout()
                    } class="nav-link">
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