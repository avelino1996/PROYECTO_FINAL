import React from "react"
import { useState, useEffect } from "react";
import CardPublication from "../components/CardPublication";
import { URL_PUBLICATIONS } from "../config";
import "../components/home.css"

export function Home() {

  const [publicationsData, setPublicationsData] = useState([]);

  const URLpubli = `${URL_PUBLICATIONS}/publicationsList`

  useEffect(() => {
    fetch(URLpubli)
      .then(response => response.json())
      .then(data => {
        setPublicationsData(data.publications)
      });
  }, []);

  return (
    <>
      <h5 className="welcome">
         Bienvenidos a la página oficial de nuestro club de Silexbikers. Aquí encontrarás todas las rutas y noticias que se llevan a cabo en nuestro club.
     </h5>
      <div className="publications">
      
     
        {publicationsData && publicationsData.map(publication =>
           <CardPublication key={publication._id} 
           publicationsData={publication} 
           />)}
      </div>
   
    </>
  
  )
}

