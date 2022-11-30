import { FETCH_REGISTROPUNTOS_SUCCESS, FETCH_REGISTROPUNTOS_ERROR } from "../tipos/types";

import { fetchSinToken,fetchConToken } from "../../helpers/fetch";

export const fetchPuntosSuccess = (Usuario) => {
  return {
    type: FETCH_REGISTROPUNTOS_SUCCESS,
    payload: Usuario,
  };
};

export const fetchPuntosError = (error) => {
  return {
    type: FETCH_REGISTROPUNTOS_ERROR,
    payload: error,
  };
};


export const fetchRegistroPuntos = (nombre, departamento, barrio, descripcion) => {

  return async (dispatch) => {
    const resp = await fetchConToken(
      "api/v1/puntos",
      { nombre, departamento, barrio, descripcion },
      "POST"
    );
    const body = await resp.json();
    console.log(body);
    console.log("hola");

    if (resp.ok) {
      
        

      dispatch(
        fetchPuntosSuccess({
          uid: body.uid,
          nombre: body.nombre,
        },
     
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Datos enviados",
          showConfirmButton: false,
          timer: 3000,
        })
        ),
     
        
      );
      console.log("hola");
      console.log(body);

    
    } else {

      console.log("hola");

      Swal.fire({
        position: "center",
        icon: "error",
        title: "error, revise los datos ingresados",
        showConfirmButton: false,
        timer: 1000,
      });

    }
  };
};