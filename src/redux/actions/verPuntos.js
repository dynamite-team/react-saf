import axios from "axios";

import { VER_PUNTOS_SUCCESS } from "../tipos/types";



export const VerPuntosSuccess = (res) => {
  return {
    type: VER_PUNTOS_SUCCESS,
    payload: res,
  };
};

//get all profiles
export const getPuntos = () => async (dispatch) => {



  const res = await axios.get(
    "https://node-saf-api.onrender.com/api/v1/puntos/?desde=0&limite=20"
  );


    dispatch(VerPuntosSuccess(res.data));

 
  

    console.log("hola");
    console.log(res);
  

};



export default getPuntos;