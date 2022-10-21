import React from 'react';
import { API} from '../config';
import "./css/showImage.css"

const ShowImage = ({item, url}) => (
    item ? 
  <div className="parentImage">
    <img
      src={`${API}/${url}/${item}.jpg`}
      alt={item}
      className="image"/>
  </div> : 
  console.log("error")
)

export default ShowImage;