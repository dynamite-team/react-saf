import React, { useEffect, useState } from "react";
import "../../../styles/StyleForm.css";
import { useForm } from "../../../hooks/useForm";
import { connect } from "react-redux";

import { fetchRegistroCategoria } from "../../../redux/actions/categorias";

//import Sidebar from "../../../components/navbars/Navhorizontal";

const RegistroCategoria = ({ fetchRegistroCategoria }) => {
  const [formRegisterValues, handleRegisterInputChange, reset] = useForm({
    nombre: "",
  });

  let { nombre } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (fetchRegistroCategoria(nombre)) {
    }
    reset();

    //setRefresh(true)
    console.log(nombre);
  };

  return (
    <>
      <div className="home">
        {/* <Sidebar /> */}
        <div className="homeContainer">
          <div className="wrapper2 ">
            <div id="formContent">
              <h2 className="active"> Registrar Categoria </h2>

              <form onSubmit={handleRegister}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Categoria"
                  name="nombre"
                  value={nombre}
                  onChange={handleRegisterInputChange}
                />

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
export default connect(mapStateToProps, { fetchRegistroCategoria })(
  RegistroCategoria
);
