export const INCREMENT = "a";
export const DECREMENT = "b";

export const increment = (val) => {
  return {
    type: "a",
    payload: val
  };
};

export const decrement = () => {
  return {
    type: "b",
  };
};
