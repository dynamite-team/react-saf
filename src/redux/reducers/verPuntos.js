import {
  
    VER_PUNTOS_SUCCESS,
    
     
    
   
   } from "../tipos/types";

  
  
  const INITIAL_STATE = {
  
   
    puntos:[],
    loading: {}
    
    
  };
  
   
  
  export default function(state = INITIAL_STATE, action){
  
    switch (action.type) {
    
      
        case  VER_PUNTOS_SUCCESS:
        return {
          
          ...state,
          puntos:action.payload,
          loading: false
          
       
          
        };
      
    
      default:
        return state;
    }
  };