import React from "react"
import { useState, useEffect } from "react";
import axios from "axios"
import { URL_USERS } from "../../config";
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import "../../components/css/usuarios.css"


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

  const { _id, username, email, role} = usuarioSeleccionado

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

  const update = user => {
    return fetch(`${URL_USERS}/users/${_id}`, { 
      method: "PUT",
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
      })
  };
  

  const editar = () => {
    setUsuarioSeleccionado({...usuarioSeleccionado})
    update({ _id, username, email, role})
    .then(data => { 
      if (data.error) {
        setUsuarioSeleccionado({ ...usuarioSeleccionado})
      }
    })
    setModalEditar(false);
    getUsers();
  }


  return (


    <div>
        <div>
          {usersData && usersData.map(user =>
            <div className="users" key={user._id}>
              <h6>{user.username}</h6>
              <div>
                <button className="btn btn-dark" onClick={() => seleccionarUsuario(user, 'Editar')}>Editar</button>{" "}
                <button className="btn btn-danger" onClick={() => seleccionarUsuario(user, 'Eliminar')}>Borrar</button>
              </div>
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
          <button className="btn btn-dark" onClick={() => editar(usuarioSeleccionado._id)}>
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
            className="btn btn-dark"
            onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
    </div>


  )
}