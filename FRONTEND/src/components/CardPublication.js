import React from "react"
import ShowImage from "./ShowImages"
import "./css/cardPubli.css"

export default function CardPublication ({ publicationsData }) {

    return (
      <li className="parent-card">
      
        <h3>{publicationsData.publicationNumber}{" "}{publicationsData.tittle}</h3>
        
        <p>{publicationsData.description}</p>
        <div>
        <ShowImage item={publicationsData.publicationNumber} url="public/upload"/>
        </div>
        
      </li>
    )

}



