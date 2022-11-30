import {
  
    FETCH_REGISTROPUNTOS_SUCCESS,
    FETCH_REGISTROPUNTOS_ERROR,
   
  
  } from "../tipos/types";

  
  
  const INITIAL_STATE = {
    loading:false,
    data:[],
    error:'',
    
    
  };
  
   
  
  export default function(state = INITIAL_STATE, action){
  
    switch (action.type) {
    
        case FETCH_REGISTROPUNTOS_ERROR:
          return {
            loading:false,
            data:[],
            error:action.payload
          };
          case CLEAR_REGISTRO:
            return {
                ...state,
                data: null,
                error: ''
            } 
        case  FETCH_REGISTROPUNTOS_SUCCESS:
        return {
          
          loading:false,
          data:action.payload,
          error:'',
          
        };
      
    
      default:
        return state;
    }
  };