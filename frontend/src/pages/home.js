import React from "react"
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { URL_PUBLICATIONS } from "../config";
import Navigation from './Navigation';

export function Home() {

  const [publication, setPublication] = useState([]);

 
  useEffect(() => {
    fetch(URL_PUBLICATIONS + "/publicationsList")
      .then(response => response.json())
      .then(data => {
        setPublication(data.results)
      });

  }, []);
  console.log(setPublication());

  return (
    <> 
    <Navigation/>
      <div className="pt-5 pb-5 flex-grow-1">
      <h1 className="text-center mb-5">Rutas realizadas</h1>

      <div className="container d-flex flex-wrap">
        {publication && publication.map(publication => <Card key={publication.description} publication={publication} />)}
      </div>
    </div>
    </>
 
  )
}
