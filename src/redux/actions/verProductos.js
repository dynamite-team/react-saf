import axios from "axios";

import { VER_PRODUCTOS_SUCCESS } from "../tipos/types";



export const VerProductosSuccess = (res) => {
  return {
    type: VER_PRODUCTOS_SUCCESS,
    payload: res,
  };
};

//get all profiles
export const getProductos = () => async (dispatch) => {



  const res = await axios.get(
    "https://node-saf-api.onrender.com/api/v1/productos?desde=0&limite=20"
  );


    dispatch(VerProductosSuccess(res.data));

 
  

    console.log("hola");
    console.log(res);
  

};



export default getProductos;