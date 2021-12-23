/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL } from "../constants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload || [];
    default:
      return state;
  }
};
