import axios from "axios";

import { VER_PROFILE_SUCCESS, } from "../tipos/types";



export const VerProfileSuccess = (res) => {
  return {
    type: VER_PROFILE_SUCCESS,
    payload: res,
  };
};

//get all profiles
export const getProfile= (id) => async (dispatch) => {



  const res = await axios.get(
    `https://node-saf-api.onrender.com/api/v1/usuarios/${id}`
  );


    dispatch(VerProfileSuccess(res.data));

 
  

    console.log("hola");
    console.log(res);
  

};



export default getProfile;