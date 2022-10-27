import React from "react";
import { API } from "../config";
import "./css/showImage.css";

const ShowImage = ({ url, alt }) => {
  console.log("Url ", `${API}/${url}`);

  return (
    <div className="parentImage">
      <img src={`${API}/${url}`} alt={alt} className="image" />
    </div>
  );
};

export default ShowImage;
