import React from "react"
import { useState, useEffect } from "react";
import { URL_ROUTES } from "../config";
import CardRoutes from "../components/CardRoutes";
import "../components/css/mountainRouts.css"

export function MountainRout() {

  const [routesData, setRoutesData] = useState([]);
  //const [error, setError] = useState(false);

  const URLroutes = `${URL_ROUTES}/routesList`

  useEffect(() => {
    fetch(URLroutes)
        .then(response => response.json())
        .then(data => {
            setRoutesData(data.routs)
        });
}, [URLroutes]);

  return (

    <> 
      <h3 className="rutasTitle">Rutas del Club</h3>
    
    <div className="routesClub">
      
        {routesData && routesData.map(route => <CardRoutes key={route._id} routesData={route} />)}
      
    </div>
    </>
   
  )
}
