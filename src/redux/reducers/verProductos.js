import {
  
    VER_PRODUCTOS_SUCCESS,
    
     
    
   
   } from "../tipos/types";

  
  
  const INITIAL_STATE = {
  
   
    productos:[],
    loading: {}
    
    
  };
  
   
  
  export default function(state = INITIAL_STATE, action){
  
    switch (action.type) {
    
      
        case  VER_PRODUCTOS_SUCCESS:
        return {
          
          ...state,
          productos:action.payload,
          loading: false
          
       
          
        };
      
    
      default:
        return state;
    }
  };