import React from "react"
import { useState, useEffect } from "react";
import axios from "axios"
import { URL_COMENT } from "../config";
import "../components/comentarios.css"

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


    <div className="list">
      <h2 className="tittle">Comentarios</h2>
      <div className="comentsList">
        {comentsData && comentsData.map(coment =>  
          <div className="coments" >
            <h6>{coment.name}</h6>
            <p>{coment.description}</p>
            <button className="btn btn-danger" onClick={() => deleteComentario(coment._id)}>Borrar</button>
          </div>
          )}
      </div>
    </div>
  )
}
