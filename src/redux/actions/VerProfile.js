import axios from "axios";
import { fetchConToken } from "../../helpers/fetch";
import { VER_PROFILE_SUCCESS, UPDATE_PROFILE } from "../tipos/types";
import Swal from "sweetalert2";


export const VerProfileSuccess = (res) => {
  return {
    type: VER_PROFILE_SUCCESS,
    payload: res,
  };
};


const profileUpdated = (profile) => {
  return ({
    type: UPDATE_PROFILE,
    payload: profile
  })
}

//get all profiles
export const getProfile = (id) => async (dispatch) => {
  const res = await fetchConToken(`api/v1/usuarios/${id}`);
  const body = await res.json();
    // console.log("body",body)

  if (res.ok) {
    dispatch(VerProfileSuccess(body.usuario));
  }
};

export const startUpdateProfile = (id, descripcion) => {

  return async (dispatch) => {
    
    try {

      const res = await fetchConToken(`api/v1/usuarios/${id}`, descripcion, "PUT");
    const body = await res.json();

    console.log("update profile");
    console.log("res", res)
    console.log("body=>>", body)

    if (body.ok) {
      dispatch(profileUpdated(descripcion))
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se Actualizó Correctamente",
        showConfirmButton: false,
        timer: 2000,
      })
    } else {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "error, revise los datos ingresados",
        showConfirmButton: false,
        timer: 1000,
      });
    }
      
    } catch (error) {
        console.log("error",error)
    }
    

  }
}

export default getProfile;