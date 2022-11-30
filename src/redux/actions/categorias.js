import { FETCH_REGISTROCATEGORIAS_SUCCESS, FETCH_REGISTROCATEGORIAS_ERROR } from "../tipos/types";

import { fetchSinToken,fetchConToken } from "../../helpers/fetch";

export const fetchCategoriasSuccess = (Usuario) => {
  return {
    type: FETCH_REGISTROCATEGORIAS_SUCCESS,
    payload: Usuario,
  };
};

export const fetchCategoriasError = (error) => {
  return {
    type: FETCH_REGISTROCATEGORIAS_ERROR,
    payload: error,
  };
};


export const fetchRegistroCategoria = (nombre) => {

  return async (dispatch) => {
    const resp = await fetchConToken(
      "api/v1/categorias",
      { nombre },
      "POST"
    );
    const body = await resp.json();
    console.log(body);
    console.log("hola");

    if (resp.ok) {
      
        

      dispatch(
        fetchCategoriasSuccess({
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