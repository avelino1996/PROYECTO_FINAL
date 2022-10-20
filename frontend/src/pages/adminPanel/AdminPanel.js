import React from "react";
import { Routes, Route } from "react-router";
import { Publicaciones } from './Publicaciones';
import {Usuarios} from './Usuarios';
import {Routesclubs} from './RoutesClubs';
import {Comentarios} from './Comentarios';
import { Link } from "react-router-dom"; 
import { useUser } from '../apiCore';
import "../../components/adminPanel.css";

export function AdminPanel() {
  const user = useUser();
  return (
    <div className="parent">
      <h4>{user.role === "ADMIN" && `Hola ${user.username}, bienvenida al panel de administración.`}</h4>
      <div className="adminPanel">
          <ul className="lateralNav">
          
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
          
          </ul>
          <div className="routes">
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