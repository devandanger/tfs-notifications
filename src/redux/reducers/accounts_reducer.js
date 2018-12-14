import { ADD_ACCOUNT } from "../actionTypes"

const initialState = {
  accounts: [
    {
      authorization: "asdfsasdf",
      project_url: "https://www.google.com"
    }
  ]
}

const accountList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
}

export default accountList;