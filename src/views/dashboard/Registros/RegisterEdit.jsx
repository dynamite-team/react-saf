import React, { useEffect, useState } from "react";
import "../../../styles/StyleForm.css";
import { useForm } from "../../../hooks/useForm";
import { connect, useDispatch } from "react-redux";
import Select from "react-select";
import {
  fetchRegistroUsuario,

} from "../../../redux/actions/registro";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
//import Sidebar from "../../../components/navbars/Navhorizontal";
import axios from "axios";
import { singlePuntos, startUpdate } from "../../../redux/actions/verPuntos";
const RegisterEdit = () => {



  let dispatch= useDispatch()

  const { id } = useParams();
  const { puntos } = useSelector((state) => state.punto);

 
  console.log(puntos)

useEffect(() => {
  dispatch(singlePuntos(id))
}, [])


const [formRegisterValues, setState]= useState({
  departamento: "",
  barrio: "",
  nombre: "",
  descripcion: "",


})

let {departamento,barrio,nombre,descripcion}=formRegisterValues

useEffect(() => {

if(puntos){
  
  setState({...puntos})

}
}, [puntos])
  



const handleRegisterInputChange = (e)=>{

  let {name, value}=e.target
  setState({formRegisterValues, [name]:value})


}

const handleSubmit = (e)=>{

e.preventDefault();

dispatch(startUpdate(formRegisterValues, id))

console.log("se pudo")

console.log(id, nombre, descripcion, departamento)


}

 
 




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

                {/* <button className="btn btn-primary btn-left me-md-2" > Enviar</button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



//{login} LO PASAMOS ARRIBA
//connect ES EL QUE SE ENCARGA DE CONECTAR LAS ACCIONES CON EL COMPONENTE
export default RegisterEdit