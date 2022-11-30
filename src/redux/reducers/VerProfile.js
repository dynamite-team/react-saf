import {
  
    VER_PROFILE_SUCCESS,
    
     
    
   
   } from "../tipos/types";

  
  
  const INITIAL_STATE = {
  
   
    profiles:[],
    loading: {}
    
    
  };
  
   
  
  export default function(state = INITIAL_STATE, action){
  
    switch (action.type) {
    
      
        case  VER_PROFILE_SUCCESS:
        return {
          
          ...state,
          profiles:action.payload,
          loading: false
          
       
          
        };
      
    
      default:
        return state;
    }
  };