import React from "react"
import ShowImage from "./ShowImages"

export default function CardPublication ({ publicationsData }) {

    return (
      <li>
        
        <h3>{publicationsData.tittle}</h3>
        <p>{publicationsData.description}</p>
        <div>
        <ShowImage className="img" item={publicationsData.publicationNumber} url="public/upload"/>
        </div>
        
      </li>
    )

}



