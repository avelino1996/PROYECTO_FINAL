import React from "react"
import { useState, useEffect } from "react";
import { URL_PUBLICATIONS } from "../config";
import axios from "axios"
import { Link, Route, Routes } from "react-router-dom";
import AddPublication from "./AddPublication";
import "../components/publicaciones.css"

export function Publicaciones() {

    const [publicationsData, setPublicationsData] = useState([]);


    useEffect(() => {
        getPublication()
    }, []);

    const getPublication = async () => {
        const result = await axios.get(`${URL_PUBLICATIONS}/publicationsList`);
        setPublicationsData(result.data.publications.reverse());
      };


    const deletePublication = async (id) => {
        await axios.delete(`${URL_PUBLICATIONS}/${id}`);
        getPublication();
      };

    return (
        <div className="addForm">
           <div>
               <Link  className="tittle" to="addPublication">Añadir Publicación</Link>
           </div>
           <div>
            <Routes>
                <Route path="addPublication" element={<AddPublication />} />
            </Routes>
           </div>


            {publicationsData && publicationsData.map(publication =>
                <div>
                    <h3>{publication.tittle}</h3>
                    <p>{publication.description}</p>
                    <button>Editar</button>
                    <button class="btn btn-danger" onClick={() => deletePublication(publication._id)}>
                        Borrar
                    </button>
                </div>
            )}
        </div>
    )
}
