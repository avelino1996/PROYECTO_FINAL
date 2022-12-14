import React from "react";
import ShowImage from "./ShowImages";
import "./css/cardRoutes.css";

export default function CardRoutes({ routesData }) {
  return (
    <div className="card">
      <li className="childCard">
        <h3>{routesData.title}</h3>
        <div className="cardImage">
          <ShowImage item={routesData._id} url={routesData.photo}/>
        </div>
        <p className="textCard">{routesData.description}</p>
      </li>
    </div>
  );
}
