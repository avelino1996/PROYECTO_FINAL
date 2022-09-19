import React from "react"
import { useState, useEffect } from "react";
import Navigation from './Navigation';
import CardRoutes from "../components/CardRoutes";
import { API } from "../config";


export function AdminPanel() {

  const [baseData, setBaseData] = useState([]);
  //const [error, setError] = useState(false);
  const urlCollections = API;

  useEffect(() => {
    fetch(urlCollections)
        .then(response => response.json())
        .then(data => {
            setBaseData(data)
        });
}, []);

  return (


    <div>
      <Navigation/>
      
      {baseData && baseData.map(base => <CardRoutes baseData={base} />)}
      
    </div>
  )
}