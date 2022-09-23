import React from "react"
import { useState, useEffect } from "react";
import { URL_ROUTES } from "../config";

export function Routesclubs() {

  const [routesData, setRoutesData] = useState([]);

  const URLroutes = `${URL_ROUTES}/routesList`

  useEffect(() => {
    fetch(URLroutes)
        .then(response => response.json())
        .then(data => {
            setRoutesData(data.routs)
        });
}, []);

  return (
    <div>
      <button>Agregar Ruta</button>
      {routesData && routesData.map(route =>
         <div>
         <h3>{route.tittle}</h3>
         <p>{route.description}</p>
         <button>Borrar</button>
     </div>
        )}
      
    </div>
  )
}
