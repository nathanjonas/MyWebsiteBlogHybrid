import { SET_COLORS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COLORS:
      return action.colors;
    default:
      return state;
  }
};
