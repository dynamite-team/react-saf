import axios from "axios";
import { fetchConToken } from "../../helpers/fetch";

import { VER_PRODUCTOS_SUCCESS, VER_PRODUCTO_SUCCESS, START_GET_PRODUCTO } from "../tipos/types";



export const VerProductosSuccess = (res) => {
  return {
    type: VER_PRODUCTOS_SUCCESS,
    payload: res,
  };
};

export const VerProducto = (producto) => {
  return{
    type: VER_PRODUCTO_SUCCESS,
    payload: producto
  }
}

export const startGetProducto = () => {
  return{
    type: START_GET_PRODUCTO
  }
}

export const getProducto = (id) => async (dispatch) => {

  dispatch(startGetProducto());
  // console.log("llegó");
  const res = await fetchConToken(`api/v1/productos/${id}`);
  const body = await res.json();
    // console.log("body",body)

  if (res.ok) {
    dispatch(VerProducto(body));
    console.log("prod => ", body)
  }
};

//get all profiles
export const getProductos = () => async (dispatch) => {
  const res = await fetchConToken(`api/v1/productos?desde=0&limite=20`);
  const body = await res.json();
  
  // await axios.get(
  //   "https://node-saf-api.onrender.com/api/v1/productos?desde=0&limite=20"
  // );
    dispatch(VerProductosSuccess(body));
    console.log("hola");
    console.log(res);
};



export default getProductos;