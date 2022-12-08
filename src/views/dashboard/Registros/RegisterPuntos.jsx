import React, { useEffect, useState } from "react";
import "../../../styles/StyleForm.css";
import { useForm } from "../../../hooks/useForm";
import { connect } from "react-redux";

import { fetchRegistroPuntos } from "../../../redux/actions/puntos";

//import Sidebar from "../../../components/navbars/Navhorizontal";

const RegistroPuntos = ({ fetchRegistroPuntos }) => {
  const [formRegisterValues, handleRegisterInputChange] = useForm({
    nombre: "",
    departamento: "",
    barrio: "",
    descripcion: "",
  });

  let { nombre, departamento, barrio, descripcion } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();

    fetchRegistroPuntos(nombre, departamento, barrio, descripcion);

    //setRefresh(true)
    console.log(nombre);
  };

  return (
    <>
      <div className="home">
        {/* <Sidebar /> */}
        <div className="homeContainer">
          <div class="wrapper2 ">
            <div id="formContent">
              <h2 class="active"> Registrar Puntos de Ventas </h2>

              <form onSubmit={handleRegister}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleRegisterInputChange}
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="Departamento"
                  name="departamento"
                  value={departamento}
                  onChange={handleRegisterInputChange}
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="Barrio"
                  name="barrio"
                  value={barrio}
                  onChange={handleRegisterInputChange}
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="Descripcion"
                  name="descripcion"
                  value={descripcion}
                  onChange={handleRegisterInputChange}
                />

                <input type="submit" class="fadeIn fourth" value="Enviar" />

                {/* <button class="btn btn-primary btn-left me-md-2" > Enviar</button> */}
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
export default connect(mapStateToProps, { fetchRegistroPuntos })(
  RegistroPuntos
);
