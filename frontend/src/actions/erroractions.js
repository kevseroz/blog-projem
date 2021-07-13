import { ADD_ERROR, REMOVE_ERROR } from "../constants/errorconstants.js";

export const addError = error => ({
  type: ADD_ERROR,
  error
});

export const removeError = () => ({
  type: REMOVE_ERROR
});
