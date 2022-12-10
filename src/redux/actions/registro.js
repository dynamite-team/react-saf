import { FETCH_REGISTRO_SUCCESS, FETCH_REGISTRO_ERROR,CLEAR_REGISTRO } from "../tipos/types";

import { fetchSinToken } from "../../helpers/fetch";

export const fetchRegistroSuccess = (Usuario) => {
  return {
    type: FETCH_REGISTRO_SUCCESS,
    payload: Usuario,
  };
};

export const fetchRegistroError = (error) => {
  return {
    type: FETCH_REGISTRO_ERROR,
    payload: error,
  };
};

export const clearRegistro = () => {
  return({
      type: CLEAR_REGISTRO,
      payload: null
  })
}

export const fetchRegistroUsuario = (usuario, nombre, apellido, correo, password, rol) => {
  return async (dispatch) => {
    const resp = await fetchSinToken(
      "api/v1/auth/registro",
      { usuario, nombre, apellido, correo, password, rol },
      "POST"
    );
    const body = await resp.json();
    console.log("body=>",body);

    if (resp.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        fetchRegistroSuccess({
          uid: body.uid,
          correo: body.correo,
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
     
    } else {
    
      Swal.fire({
        position: "center",
        icon: "error",
        title: `${body.errors[0].msg}`,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };
};




