// import { INCREMENT, DECREMENT } from "./actions";

const initialState = {
  count: 15,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "aa":
      return { ...state, count: state.count + action.payload };
    case "b":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
