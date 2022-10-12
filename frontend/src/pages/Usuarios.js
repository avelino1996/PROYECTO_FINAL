import React from "react"
import { useState, useEffect } from "react";
import axios from "axios"
import { URL_USERS } from "../config";

export function Usuarios() {

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsers()
}, []);

const getUsers = async () => {
    const result = await axios.get(`${URL_USERS}/users/list`);
    console.log(result.data);
    setUsersData(result.data.results);
  };

const deleteUsers = async (id) => {
  await axios.delete(`${URL_USERS}/users/${id}`);
  getUsers();
};


  return (


    <div className="list">
      <h2 className="tittle">Usuarios</h2>
      <div>
        {usersData && usersData.map(user =>  
          <div className="users">
            <h6>{user.username}</h6>
            <p>{user.email}</p>
            <button className="btn btn-danger" onClick={() => deleteUsers(user._id)}>Borrar</button>
          </div>
          )}
      </div>
    </div>
  )
}