import React, { useEffect, useState } from "react";
import "../../../styles/StyleForm.css";
import { useForm } from "../../../hooks/useForm";
import { connect } from "react-redux";
import Select from "react-select";
import {
  fetchRegistroUsuario,
  clearRegistro,
} from "../../../redux/actions/registro";

//import Sidebar from "../../../components/navbars/Navhorizontal";

const Registro = ({ fetchRegistroUsuario }) => {
  const [formRegisterValues, handleRegisterInputChange] = useForm({
    correo: "",
    password: "",
    nombre: "",
    rol: "",
  });

  let { correo, password, nombre, rol } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (fetchRegistroUsuario(correo, password, nombre, rol)) {
    }

    //setRefresh(true)
    console.log(nombre, rol);
  };

  return (
    <>
      <div className="home">
        {/* <Sidebar /> */}
        <div className="homeContainer">
          <div className="wrapper2 ">
            <div id="formContent">
              <h2 className="active"> Registrar Usuario </h2>

              <form onSubmit={handleRegister}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Correo"
                  name="correo"
                  value={correo}
                  onChange={handleRegisterInputChange}
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="Contraseña"
                  name="password"
                  value={password}
                  onChange={handleRegisterInputChange}
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleRegisterInputChange}
                />

                <select
                  className="form-select form-select mx-4 mb-5"
                  aria-label="Default select example"
                  style={{ width: "400px", top: "10px", position: "relative" }}
                  name="rol"
                  onChange={handleRegisterInputChange}
                >
                  <option>Selecciona un rol</option>
                  <option value="admin">admin</option>
                  <option value="productor">productor</option>
                  <option value="inventario">inventario</option>
                  <option value="cajero">cajero</option>
                </select>

                <input type="submit" className="fadeIn fourth" value="Enviar" />

                {/* <button className="btn btn-primary btn-left me-md-2" > Enviar</button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.registro.data,
});

//{login} LO PASAMOS ARRIBA
//connect ES EL QUE SE ENCARGA DE CONECTAR LAS ACCIONES CON EL COMPONENTE
export default connect(mapStateToProps, {
  fetchRegistroUsuario,
  clearRegistro,
})(Registro);
