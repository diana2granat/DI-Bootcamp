export const CHANGE_TEXT = "change_text";

export const changeText = (val) => {
  return {
    type: CHANGE_TEXT,
    payload: val,
  };
};
