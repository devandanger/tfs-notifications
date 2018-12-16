import { ADD_ACCOUNT } from "../actionTypes"

const initialState = {
  accounts: [
    {
      project_url: "https://www.google.com",
      authorization: "asdfsasdf"
    },
    {
      project_url: "https://www.azuredevops.com",
      authorization: "qwerqwer"
    }
  ]
}

const accountList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT: {
      const authorization = action.payload.authorization
      const project_url = action.payload.project_url

      if (state.accounts.some(account => account.project_url === project_url)) {
        return state;
      } else {
        state.accounts.push(action.payload)
      }
    }
    default: {
      return state;
    }
  }
}

export default accountList