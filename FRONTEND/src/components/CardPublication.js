import React from "react";
import ShowImage from "./ShowImages";
import "./css/cardPubli.css";

export default function CardPublication({ publicationsData }) {
  console.log("DATA", publicationsData);
  return (
    <li className="parent-card">
      <h3>{publicationsData.title}</h3>

      <p>{publicationsData.description}</p>
      <div>
        <ShowImage alt={publicationsData._id} url={publicationsData.photo} />
      </div>
    </li>
  );
}
