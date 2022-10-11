import React from "react"
import { useState, useEffect } from "react";
import { URL_ROUTES } from "../config"; 
import axios from "axios"
import ("../components/routesClubs.css")

export function RouteClub() {

    const [routesData, setRoutesData] = useState([]);

    useEffect(() => {
        getRouteClub()
    }, []);

    const getRouteClub = async () => {
        const result = await axios.get(`${URL_ROUTES}/routesList`);
        setRoutesData(result.data.routs.reverse());
    };
    const deleteRoute = async (id) => {
        await axios.delete(`${URL_ROUTES}/${id}`);
        getRouteClub();
      };


    return (
        <div className="routesList">
            {routesData && routesData.map(route =>
                <div className="publicationsList">
                    <h5 className="tittleList">{route.tittle}</h5>
                    <div className="contentButton">
                        <button class="btn btn-dark" >Editar</button>
                        <button class="btn btn-danger" onClick={() => deleteRoute(route._id)}>
                            Borrar
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}
