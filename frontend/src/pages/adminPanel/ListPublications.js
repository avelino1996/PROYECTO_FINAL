import React from "react"
import { useState, useEffect } from "react";
import { URL_PUBLICATIONS } from "../../config";
import axios from "axios"
import "../../components/publicaciones.css"

export function ListPublications() {

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
            {publicationsData && publicationsData.map(publication =>
                <div className="publicationsList" key={publication._id}>
                    <h3>{publication.tittle}</h3>
                    <button className="btn btn-danger" onClick={() =>  deletePublication(publication._id)}>
                        Borrar
                    </button>
                </div>
            )}
        </div>
    )
}
