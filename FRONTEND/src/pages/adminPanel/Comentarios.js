import React from "react"
import { useState, useEffect } from "react";
import axios from "axios"
import { URL_COMENT } from "../../config";
import "../../components/css/comentarios.css"

export function Comentarios() {

  const [comentsData, setcomentsData] = useState([]);

  useEffect(() => {
    getComentarios()
}, []);

const getComentarios = async () => {
    const result = await axios.get(`${URL_COMENT}/comentList`);
    setcomentsData(result.data.coments.reverse());
  };

const deleteComentario = async (id) => {
  await axios.delete(`${URL_COMENT}/${id}`);
  getComentarios();
};


  return (


    <div >
      <div>
        {comentsData && comentsData.map(coment =>  
          <div className="coments" key={coment._id}>
              <h6>{coment.name}</h6>
              <h6>{coment.email}</h6>
            <p className="parrafo">{coment.description}</p>
            <div><button className="btn btn-danger" onClick={() => deleteComentario(coment._id)}>Borrar</button></div>
          </div>
          )}
      </div>
    </div>
  )
}
