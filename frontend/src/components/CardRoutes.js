import React from "react"
import ShowImage from "./ShowImages"
import "./cardRoutes.css"

export default function CardRoutes({ routesData }) {

  return (
    <div className="card">
      <li className="childCard">

          <h3>{routesData.tittle}</h3>
          <div className="cardImage">
          <ShowImage item={routesData.tittle} url="public/upload" />
        </div>
          <p className="textCard">{routesData.description}</p>
        
      </li>
    </div>
  )

}



