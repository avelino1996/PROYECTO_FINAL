import React from "react"
import ShowImage from "./ShowImages"

export default function CardRoutes ({ routesData }) {

    return (
      <li>
        
        <h3>{routesData.tittle}</h3>
        <p>{routesData.description}</p>
        <div>
        <ShowImage className="img" item={routesData.tittle} url="public/upload"/>
        </div>
        
      </li>
    )

}



