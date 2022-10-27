import React, { useState } from "react";
import { URL_PUBLICATIONS } from "../../config";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../components/css/addPublication.css";

const AddPublication = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    distance: "",
    createBy: "",
    photo: "",
    loading: false,
    error: "",
    success: false
  });

  const { title, description, distance, createBy, loading, error, success } = values;

  const handleChange = (name) => async (event) => {
    let value = null;
    if (name === "photo") {
      value = await getBase64(event.target.files[0]);
    } else {
      value = event.target.value;
    }

    setValues({ ...values, [name]: value });
  };

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };

      // Convert the file to base64 text
      reader.readAsDataURL(file);
    });
  };

  const limpiarFormulario = () => {
    setValues({
      title: "",
      description: "",
      distance: "",
      createBy: "",
      photo: "",
      loading: false,
      error: "",
      success: true
    });
  };

  const clickSubmit = async (event) => {
    event.preventDefault();
    console.log("Creando publicación", `${URL_PUBLICATIONS}/createPublication`);
    await axios.post(`${URL_PUBLICATIONS}/createPublication`, values);
    limpiarFormulario();
    event.preventDefault();
  };

  const newPublicationForm = () => (
    <form className="mb-3">
      <label className="text-muted">Añadir foto</label>
      <div className="form-group">
        <label className="btn btn-secondary">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image/*"
          />
        </label>
      </div>
      <div className="form-group">
        <label className="text-muted">Título</label>
        <input
          onChange={handleChange("title")}
          type="text"
          className="form-control"
          value={title}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Descripción de la ruta</label>
        <input
          onChange={handleChange("description")}
          type="text"
          className="form-control"
          value={description}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Distancia</label>
        <input
          onChange={handleChange("distance")}
          type="text"
          className="form-control"
          value={distance}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Creado por</label>
        <input
          onChange={handleChange("createBy")}
          type="text"
          className="form-control"
          value={createBy}
        />
      </div>
      <button className="btn btn-outline-primary" onClick={clickSubmit}>
        Crear publicación
      </button>
    </form>
  );

  const showPublication = () => (
    <div
      className="alert alert-dark"
      style={{ display: success ? "" : "none" }}
    >
      {" "}
      Publicación creada con exito, ya puedes verla {" "}
      {"   "}
      <Link className="title" to="/">
        Aqui
      </Link>
    </div>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-success">
        <h2>Loading ...</h2>
      </div>
    );

  return (
    <>
      <div className="formContainer">
        <div className="addRow">
          <div className="col-md-8 offset-md-2">
            {showLoading()}
            {showError()}
            {showPublication()}
            {newPublicationForm()}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPublication;
