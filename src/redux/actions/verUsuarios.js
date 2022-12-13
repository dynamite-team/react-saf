import axios from "axios";
import { fetchConToken } from "../../helpers/fetch";
import { VER_USUARIOS_SUCCESS } from "../tipos/types";

export const VerUsuarioSuccess = (res) => {
  return {
    type: VER_USUARIOS_SUCCESS,
    payload: res,
  };
};

//get all profiles
export const verUsuarios = () => async (dispatch) => {

  const res = await fetchConToken(`api/v1/usuarios/?desde=0&limite=20`);
  const body = await res.json();
  
    dispatch(VerUsuarioSuccess(body));
    console.log("hola");
    console.log(body);
};

export default verUsuarios;

