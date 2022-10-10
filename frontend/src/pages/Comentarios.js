import React from "react"
import { useState, useEffect } from "react";
import { URL_COMENT } from "../config";
import "../components/comentarios.css"

export function Comentarios() {

  const [comentsData, setcomentsData] = useState([]);

  const URLcoments = `${URL_COMENT}/comentList`

  useEffect(() => {
    fetch(URLcoments)
        .then(response => response.json())
        .then(data => {
          console.log(data);
            setcomentsData(data.coments) 
        });
}, []);

  return (


    <div className="list">
      <h2 className="tittle">Comentarios</h2>
      <div className="comentsList">
        {comentsData && comentsData.map(coment =>  
          <div className="coments" >
            <h6>{coment.name}</h6>
            <p>{coment.description}</p>
            <button>Borrar</button>
          </div>
          )}
      </div>
    </div>
  )
}
