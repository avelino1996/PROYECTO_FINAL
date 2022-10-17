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
                <div className="publicationsList" key={route._id}>
                    <h5 className="tittleList">{route.tittle}</h5>
                    <div className="contentButton">
                        <button className="btn btn-dark" >Editar</button>
                        <button className="btn btn-danger" onClick={() => deleteRoute(route._id)}>
                            Borrar
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}
