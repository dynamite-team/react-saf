import axios from "axios";

import { VER_CATEGORIAS_SUCCESS } from "../tipos/types";



export const VerCategoriasSuccess = (res) => {
  return {
    type: VER_CATEGORIAS_SUCCESS,
    payload: res,
  };
};

//get all profiles
export const getCategorias = () => async (dispatch) => {



  const res = await axios.get(
    "https://node-saf-api.onrender.com/api/v1/categorias/?desde=0&limite=20"
  );


    dispatch(VerCategoriasSuccess(res.data));

 
  

    console.log("hola");
    console.log(res);
  

};



export default getCategorias;