import { CHANGE_TEXT } from "./actions";

const initialState = {
  text: "Text from Store",
};

export const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
