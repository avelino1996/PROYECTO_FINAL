import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddRouteClub from "./AddRouteClub";
import { RouteClub } from "./RouteClub";
import "../../components/css/routesClubs.css";

export function Routesclubs() {
  return (
    <div className="addForm">
      <div className="route">
        <Link className="title" to="AddRouteClub">
          Añadir Ruta
        </Link>
        <Link className="title" to="RouteClub">
          Rutas del club
        </Link>
      </div>
      <div>
        <Routes>
          <Route path="AddRouteClub" element={<AddRouteClub />} />
          <Route path="RouteClub" element={<RouteClub />} />
        </Routes>
      </div>
    </div>
  );
}
