import React from "react"
import { Link, Route, Routes } from "react-router-dom";
import AddRouteClub from "./AddRouteClub";
import { RouteClub } from "./RouteClub";
import "../components/routesClubs.css"

export function Routesclubs() {

  return (
    <div className="addForm">
      <div className="routes">
        <Link className="tittle" to="AddRouteClub">Añadir Ruta</Link>
        <Link className="tittle" to="RouteClub">Rutas</Link>

      </div>
      <div>
        <Routes>
          <Route path="AddRouteClub" element={<AddRouteClub />} />
          <Route path="RouteClub" element={<RouteClub />} />
        </Routes>
      </div>
    </div>
  )
}
