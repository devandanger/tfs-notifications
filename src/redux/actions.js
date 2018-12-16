import { ADD_ACCOUNT } from "./actionTypes";

export const addAccount = content => ({
    type: ADD_ACCOUNT,
    payload: content
  });