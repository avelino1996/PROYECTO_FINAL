import React from "react"
import { useState, useEffect } from "react";
import CardPublication from "../components/CardPublication";
//import { getPublications } from "./apiCore";
import Navigation from './Navigation';
import { URL_PUBLICATIONS } from "../config";

export function Home() {

  const [publicationsData, setPublicationsData] = useState([]);
  //const [error, setError] = useState(false);

  const URLpubli = `${URL_PUBLICATIONS}/publicationsList`

  useEffect(() => {
    fetch(URLpubli)
      .then(response => response.json())
      .then(data => {
        setPublicationsData(data.publications)
      });
  }, []);

  return (


    <div>
      <Navigation />

      {publicationsData && publicationsData.map(publication => <CardPublication key={publication._id} publicationsData={publication} />)}

    </div>
  )
}

