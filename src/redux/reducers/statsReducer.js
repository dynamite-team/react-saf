import { TYPES } from "../tipos/types";

export const statsInitialState = {
  loading: true,
};

export const statsReducer = (state = statsInitialState, action) => {
  switch (action.type) {
    case TYPES.ADD_STATS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
