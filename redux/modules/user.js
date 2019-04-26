// imports

import { API_URL } from '../../constants';

// actions

// action creators

// API actions

function login(username, password) {
  return dispatch => {
    fetch(`${API_URL}/rest-auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }
}

// initial state

const initialState = {
  isLoggedIn: false
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// reducer functions

// exports

const actionCreator = {
  login
}

export { actionCreator }

// default export

export default reducer;
