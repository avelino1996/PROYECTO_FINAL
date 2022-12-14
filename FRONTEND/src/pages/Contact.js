import React, { useState } from "react";
import { coments } from "./apiCore";
import "../components/css/contact.css";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    surname: "",
    description: "",
    error: "",
    loading: false,
    success: false
  });

  const { name, email, surname, description, loading, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const limpiarFormulario = () => {
    setValues({
      name: "",
      email: "",
      surname: "",
      description: "",
      error: "",
      loading: false,
      success:true
    });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true, success: false });
    coments({ name, email, surname, description }).then((data, e) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          success: true,
        });
        limpiarFormulario();
      }
    });
  };

  const comentForm = () => (
    <div className="formContactParent">
      <form id="myFormContact" className="formContact">
        <h3 className="titleForm">Contacta con nosotros</h3>
        <div className="formContactChild">
          <label className="text-muted">Nombre</label>
          <input
            className="inputForm"
            onChange={handleChange("name")}
            type="name"
            value={name}
          />
        </div>
        <div className="formContactChild">
          <label className="text-muted">Apellidos</label>
          <input
            className="inputForm"
            onChange={handleChange("surname")}
            type="surname"
            value={surname}
          />
        </div>
        <div className="formContactChild">
          <label className="text-muted">Email</label>
          <input
            className="inputForm"
            onChange={handleChange("email")}
            type="email"
            value={email}
          />
        </div>
        <div className="formContactChild">
          <label className="text-muted">Deja tu comentario aqui</label>
          <input
            className="lastInputForm"
            onChange={handleChange("description")}
            type="description"
            value={description}
          />
        </div>
        <div className="formContactChild">
          <button className="buttonForm" onClick={clickSubmit}>
            Enviar
          </button>
        </div>
      </form>
      <div className="chats">
        <div className="chatsChild">
          <button
            className="logo"
            onClick={() => window.open("https://www.facebook.es")}
          >
            <h5>Enlace a nuestra cuenta de Facebook</h5>
            <img
              src="https://cdn-icons-png.flaticon.com/64/1051/1051360.png"
              alt=""
            />
          </button>
          <button
            className="logo"
            onClick={(e) => window.open("https://www.instagram.com")}
          >
            <h5>Enlace a nuestra cuenta de Instagram</h5>
            <img
              src="https://cdn-icons-png.flaticon.com/64/87/87390.png"
              alt=""
            />
          </button>
        </div>
        <div className="textDirection">
          <h6>Direcci??n: C/Por proponer N??13, CP:123456 {`(Pueblo)`}</h6>
        </div>
      </div>
    </div>
  );

  const showComents = () => (
    <div
      className="alert alert-dark"
      style={{ display: success ? "" : "none" }}
    >
      Su mensaje ha sido enviado, nos pondremos en contacto con usted lo antes posible. Gracias!!!
    </div>
  );
  const showError = () => (
    <div
      className="alert alert-danget"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );

  return (
    <>
      {showError()}
      {showComents()}
      {showLoading()}
      {comentForm()}
    </>
  );
}
