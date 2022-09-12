import React from 'react';
import { API} from '../config';

const ShowImage = ({item, url}) => (
    item ? 
  <div className="product-img">
    <img
      src={`${API}/${url}/${item}.jpg`}
      alt={item}
      className="mb-3 img-cont"
      style={{maxHeight: "600px", maxWidth:"300px"}}/>
  </div> : 
  console.log("error")
)

export default ShowImage;