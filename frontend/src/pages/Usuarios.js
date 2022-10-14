import React from "react"
import { useState, useEffect } from "react";
import axios from "axios"
import { URL_USERS } from "../config";
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';


export function Usuarios() {

  const [usersData, setUsersData] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    _id: '',
    username: '',
    email: '',
    role: ''
  });

  useEffect(() => {
    getUsers()
  }, []);

  const getUsers = async () => {
    const result = await axios.get(`${URL_USERS}/users/list`);
    setUsersData(result.data.results);
  };

  const deleteUsers = async (id) => {
    await axios.delete(`${URL_USERS}/users/${id}`);
    setModalEliminar(false)
    getUsers();
  };

  const seleccionarUsuario = (elemento, caso) => {
    setUsuarioSeleccionado(elemento);
    (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
  }
  const handleChange = e => {
    const { name, value } = e.target;
    setUsuarioSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const editar = async (id) => {
  await axios.put(`${URL_USERS}/users/${id}`);
   setModalEditar(false);
    getUsers();
  }


  return (


    <div className="list">
      <h2 className="tittle">Usuarios</h2>
      <div>
        {usersData && usersData.map(user =>
          <div className="users">
            <h6>{user.username}</h6>
            <p>{user.email}</p>
            <button className="btn btn-dark" onClick={() => seleccionarUsuario(user, 'Editar')}>Editar</button>
            <button className="btn btn-danger" onClick={() => seleccionarUsuario(user, 'Eliminar')}>Borrar</button>
          </div>
        )}
      </div>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Usuario</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="_id"
              value={usuarioSeleccionado && usuarioSeleccionado._id}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="username"
              value={usuarioSeleccionado && usuarioSeleccionado.username}
              onChange={handleChange}
            />
            <br />

            <label>Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              value={usuarioSeleccionado && usuarioSeleccionado.email}
              onChange={handleChange}
            />
            <br />
            
            <label>Rol</label>
            <input
              className="form-control"
              type="text"
              name="role"
              value={usuarioSeleccionado && usuarioSeleccionado.role}
              onChange={handleChange}
            />
          </div>

        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => editar(usuarioSeleccionado._id)}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          ¿Estás Seguro que deseas eliminar a {usuarioSeleccionado && usuarioSeleccionado.username}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>deleteUsers(usuarioSeleccionado._id)}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
    </div>


  )
}