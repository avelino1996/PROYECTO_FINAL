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

      <div className="adminPanel">
        <div>
          <nav className="lateralNav">
            <li className="componentNav">
              <Link className="linkNav" to="publications">Publicaciones</Link>
            </li>
            <li className="componentNav">
              <Link className="linkNav" to="users">Usuarios</Link>
            </li>
            <li className="componentNav">
              <Link className="linkNav" to="routesClub">Rutas del club</Link>
            </li>
            <li className="componentNav">
              <Link className="linkNav" to="coments">Comentarios</Link>
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