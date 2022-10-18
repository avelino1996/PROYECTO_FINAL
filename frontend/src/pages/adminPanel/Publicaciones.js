import React from "react"
import { Link, Route, Routes } from "react-router-dom";
import AddPublication from "./AddPublication";
import { ListPublications } from "./ListPublications";
import "../../components/publicaciones.css"

export function Publicaciones() {

    return (
        <div className="addForm">
           <div>
               <Link  className="tittle" to="addPublication">Añadir Publicación</Link>
               <Link  className="tittle" to="listPublications">Publicaciones</Link>
           </div>
           <div>
            <Routes>
                <Route path="addPublication" element={<AddPublication />} />
                <Route path="listPublications" element={<ListPublications />} />
            </Routes>
           </div>
        </div>
    )
}
