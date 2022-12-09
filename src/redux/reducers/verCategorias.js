import {
  VER_CATEGORIAS_SUCCESS,
} from "../tipos/types";

const INITIAL_STATE = {
  categorias: [],
  loading: {}
};

export default function (state = INITIAL_STATE, action) {

  switch (action.type) {
    case VER_CATEGORIAS_SUCCESS:
      return {
        ...state,
        categorias: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
