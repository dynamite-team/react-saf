import {
  FETCH_REGISTROPRODUCTOS_SUCCESS,
  FETCH_REGISTROPRODUCTOS_ERROR,
} from "../tipos/types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_REGISTROPRODUCTOS_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload
      };
    case FETCH_REGISTROPRODUCTOS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    default:
      return state;
  }
};