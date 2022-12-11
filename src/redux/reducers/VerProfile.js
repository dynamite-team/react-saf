import {
  VER_PROFILE_SUCCESS,
  UPDATE_PROFILE,
} from "../tipos/types";

const INITIAL_STATE = {
  profile: null,
  loading: true
};

export default function (state = INITIAL_STATE, action) {

  switch (action.type) {
    case VER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case UPDATE_PROFILE:
      return{
        ...state
      };
    default:
      return state;
  }

};