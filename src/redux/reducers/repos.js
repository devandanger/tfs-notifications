import { ADD_REPO } from "../actionTypes";

const initialState = {
  };

const repoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REPO: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default repoList;

