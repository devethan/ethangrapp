// imports

import { API_URL } from "../../constants";
import { AsyncStorage } from "react-native";

// actions

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

// action creators

function setLogin(token) {
  AsyncStorage.setItem("token", token);
  return {
    type: LOG_IN,
    token
  };
}
function logout() {
  return { type: LOG_OUT };
}

// API actions

function login(username, password) {
  return dispatch => {
    return fetch(`${API_URL}/rest-auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(json => {
        if(json.token) {
          // dispatch to save auth-token
          dispatch(setLogin(json.token));
          return true;
        } else {
          return false;
        }
      });
  };
}

// initial state

const initialState = {
  isLoggedIn: false
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return applyLogin(state, action);
    case LOG_OUT:
      return applyLogout(state, action);
    default:
      return state;
  }
}

// reducer functions

function applyLogin(state, action) {
  const { token } = state;
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

function applyLogout(state, action) {
  AsyncStorage.clear();
  console.log('asdadads')
  return {
    ...state,
    isLoggedIn: false,
    token: ""
  };
}

// exports

const actionCreator = {
  login,
  logout
};

export { actionCreator };

// default export

export default reducer;
