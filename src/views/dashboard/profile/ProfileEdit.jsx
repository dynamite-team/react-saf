import React, { useEffect, useState } from "react";
import "../../../styles/StyleForm.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import { startUpdateProfile } from "../../../redux/actions/VerProfile";


const ProfileEdit = () => {

  let dispatch = useDispatch();
  const { id } = useParams();
  const { profile } = useSelector((state) => state.profile);
  // console.log(puntos);

  const [formRegisterValues, setState] = useState({
    departamento: "",
    barrio: "",
    nombre: "",
    descripcion: "",
  })

  let { departamento, barrio, nombre, descripcion } = formRegisterValues

  const handleRegisterInputChange = (e) => {
    let { name, value } = e.target
    setState({ formRegisterValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startUpdate(formRegisterValues, id))
    // console.log("se pudo")
    // console.log(id, nombre, descripcion, departamento)
  }

  useEffect(() => {
    dispatch(singlePuntos(id))
  }, [])

  useEffect(() => {
    if (profile) {
      setState({ ...profile })
    }
  }, [puntos])

  return (
    <>
      <div className="home">
        {/* <Sidebar /> */}
        <div className="homeContainer">
          <div className="wrapper2 ">
            <div id="formContent">
              <h2 className="active"> Registrar Usuario </h2>

              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  className="form-control"
                  placeholder="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleRegisterInputChange}
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="departamento"
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
                  placeholder="descripcion"
                  name="descripcion"
                  value={descripcion}
                  onChange={handleRegisterInputChange}
                />

                <input type="submit" className="fadeIn fourth" value="Enviar" />

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;