import React from "react";
import { Link } from "react-router-dom";
import { NavItem } from "reactstrap";

import { isAuthenticated, signout } from "./apiCore";

export default  function Navigation() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <NavItem className="nav-link">
                <Link className="nav-link" to="/">
                  Hola
                </Link>
              </NavItem>
            </ul>
            <ul className="navbar-nav">
              {!isAuthenticated() && (
                <>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/history">
                      Historia
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/mountainRout">
                      Rutas del club
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/Contact">
                      Contacto
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/Login">
                      Login
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/CreateAccount">
                      Crear cuenta
                    </Link>
                  </NavItem>
                </>
              )}
              { isAuthenticated() && (
                <>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/history">
                      Historia
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/mountainRout">
                      Rutas del club
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link className="nav-link" to="/">
                      Contacto
                    </Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link
                      to="/"
                      onClick={() => signout()
                        } className="nav-link">
                      Logout
                    </Link>
                  </NavItem>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

