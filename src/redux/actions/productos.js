import { FETCH_REGISTROPRODUCTOS_SUCCESS, FETCH_REGISTROPRODUCTOS_ERROR } from "../tipos/types";

import { fetchConToken } from "../../helpers/fetch";

export const fetchProductosSuccess = (Usuario) => {
  return {
    type: FETCH_REGISTROPRODUCTOS_SUCCESS,
    payload: Usuario,
  };
};

export const fetchProductosError = (error) => {
  return {
    type: FETCH_REGISTROPRODUCTOS_ERROR,
    payload: error,
  };
};


export const fetchRegistroProducto = (nombre,precio,categoria,descripcion,proveedor,img) => {

  return async (dispatch) => {
    const resp = await fetchConToken(
      "api/v1/productos",
      { nombre,precio,categoria,descripcion,proveedor,img },
      "POST"
    );
    const body = await resp.json();
    console.log(body);
    console.log("hola");

    if (resp.ok) {
      
        

      dispatch(
        fetchProductosSuccess({
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

export default fetchRegistroProducto;