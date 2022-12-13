import {
  VER_PRODUCTOS_SUCCESS,
  VER_PRODUCTO_SUCCESS,
  START_GET_PRODUCTO
} from "../tipos/types";



const INITIAL_STATE = {
  productos: null,
  loading: true
};



export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case START_GET_PRODUCTO:
      {
        console.log("lalalala")
        return{
          ...state,
          loading: true,
        }
      }
     
    case VER_PRODUCTOS_SUCCESS:
      {
        console.log("console si", action.payload)
        return {
          ...state,
          productos: action.payload,
          loading: false
        };
      }
     
    case VER_PRODUCTO_SUCCESS:
      {
        console.log("console payload", action.payload)
        return {
          ...state,
          productos: action.payload,
          loading: false
        };
      }
    

    default:
      return state;
  }
};