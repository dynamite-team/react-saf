
import { fetchSinToken } from "../../helpers/fetch";

import {
  FETCH_USUARIO_REQUEST,
  FETCH_USUARIO_SUCCESS,
  FETCH_USUARIO_ERROR,
} from "../tipos/types";


import { Navigate, useNavigate } from "react-router-dom";



export const fetchUsuarioRequest = () => {
  return {
    type: FETCH_USUARIO_REQUEST,
  };
};

export const fetchUsuarioSuccess = (correo) => {
  return {
    type: FETCH_USUARIO_SUCCESS,
    payload: correo,
    
  }
  
};

export const fetchUsuarioError = (error) => {
  return {
    type: FETCH_USUARIO_ERROR,
    payload: error,
  };
};

export const fetchUsuario = (correo, password) =>async dispatch=> {

 


    const resp = await fetchSinToken(
      "api/v1/auth/login",
      { correo, password },
      "POST"
    );
    const body = await resp.json();
    
    console.log(body);
  
    if (resp.ok) {
      
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      
      dispatch(
        fetchUsuarioSuccess({
            type: FETCH_USUARIO_SUCCESS,
            payload:body
       
        }),
        
       
      )
      
return true

     



    } else {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "error, revise los datos ingresados",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  
};

export default fetchUsuario;
