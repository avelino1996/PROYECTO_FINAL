import React from "react";
import Navigation from './Navigation';
import "../components/adminPanel.css";
import { Routes, Route } from "react-router";
import { Publicaciones } from './Publicaciones';
import Usuarios from './Usuarios';
import {Routesclubs} from './RoutesClubs';
import Comentarios from './Comentarios';
import { Link } from "react-router-dom";


export function AdminPanel() {

  return (
    <div>
      <Navigation />

      <div>
        <div>
          <nav>
            <li>
              <Link to="publications">Publicaciones</Link>
            </li>
            <li>
              <Link to="users">Usuarios</Link>
            </li>
            <li>
              <Link to="routesClub">Rutas del club</Link>
            </li>
            <li>
              <Link to="coments">Comentarios</Link>
            </li>
          </nav>
        </div>

        <div>
          <Routes>
            <Route path="publications/*" element={<Publicaciones />} />
            <Route path="users/*" element={<Usuarios />} />
            <Route path="routesClub/*" element={<Routesclubs />} />
            <Route path="coments/*" element={<Comentarios />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}