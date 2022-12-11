import {
  VER_PUNTOS_SUCCESS,
  UPDATE_PUNTOS,
  SINGLE_PUNTOS
} from "../tipos/types";

const INITIAL_STATE = {
  puntos: [],
  loading: {}
};


export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case VER_PUNTOS_SUCCESS:
      return {
        ...state,
        puntos: action.payload,
        loading: false
      };
    case SINGLE_PUNTOS:
      return {
        ...state,
        puntos: action.payload,
        loading: false
      };
    case UPDATE_PUNTOS:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
};