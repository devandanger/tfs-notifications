import { ADD_ACCOUNT } from "../actionTypes";

const initialState = {
  };

const repoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default repoList;

