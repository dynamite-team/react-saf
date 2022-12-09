import axios from "axios";
import { fetchConToken } from "../../helpers/fetch";

import { VER_PUNTOS_SUCCESS,UPDATE_PUNTOS, SINGLE_PUNTOS } from "../tipos/types";



export const VerPuntosSuccess = (res) => {
  return {
    type: VER_PUNTOS_SUCCESS,
    payload: res,
  };
};

export const VerPuntosSingle = (punto) => {
  return {
    type: SINGLE_PUNTOS,
    payload: punto,
  };
};

export const updatePuntos = (punto) => {
  return({
      type: UPDATE_PUNTOS,
      payload:punto
  })
}

//get all profiles
export const getPuntos = () => async (dispatch) => {



  const res = await axios.get(
    "https://node-saf-api.onrender.com/api/v1/puntos/?desde=0&limite=20"
  );


    dispatch(VerPuntosSuccess(res.data));

 
  

    console.log("hola");
    console.log(res);
  

};

export const singlePuntos = (id) => async (dispatch) => {



  const res = await axios.get(
    `https://node-saf-api.onrender.com/api/v1/puntos/${id}`
  );


    dispatch(VerPuntosSingle(res.data));

 
  

    console.log("hola");
    console.log(res);
  

};

export const startUpdate = (punto,id) => async (dispatch) => {



  const resp = await fetchConToken(`api/v1/puntos/${id}`, punto,'PUT' );

  if ( resp.ok ) {
    dispatch(updatePuntos(punto));

    
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se Actualizó Correctamente",
      showConfirmButton: false,
      timer: 3000,
    })
} else {
  Swal.fire({
    position: "center",
    icon: "error",
    title: "error, revise los datos ingresados",
    showConfirmButton: false,
    timer: 1000,
  });
}
   

    console.log("holaUpdate");
    console.log(resp);
  

};
