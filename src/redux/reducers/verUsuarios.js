import {
  VER_USUARIOS_SUCCESS
} from "../tipos/types";



const INITIAL_STATE = {
  usuarios: [],
  loading: {}
};



export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case VER_USUARIOS_SUCCESS:
      return {
        ...state,
        usuarios: action.payload,
        loading: false
      };
    default:
      return state;
  }
};