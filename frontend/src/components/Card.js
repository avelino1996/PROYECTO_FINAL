import React from "react"

export default function Card ({ publicationsData }) {

    return (
      <li>
        <h3>{publicationsData.tittle}</h3>
        <p>{publicationsData.description}</p>
      </li>
    )

}



