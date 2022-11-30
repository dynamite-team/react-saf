import axios from "axios";

import { VER_USUARIOS_SUCCESS } from "../tipos/types";



export const VerUsuarioSuccess = (res) => {
  return {
    type: VER_USUARIOS_SUCCESS,
    payload: res,
  };
};

//get all profiles
export const verUsuarios = () => async (dispatch) => {



  const res = await axios.get(
    "https://node-saf-api.onrender.com/api/v1/usuarios/?desde=0&limite=20"
  );


    dispatch(VerUsuarioSuccess(res.data));

 
  

    console.log("hola");
    console.log(res);
  

};



export default verUsuarios;

