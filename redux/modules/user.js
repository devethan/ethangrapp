// imports

import { API_URL, FB_APP_ID } from "../../constants";
import { AsyncStorage } from "react-native";
import { Facebook } from "expo";

// actions

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

// action creators

function setLogin(token) {
  return {
    type: LOG_IN,
    token
  };
}
function logout() {
  return { type: LOG_OUT };
}
function setUser(user) {
  return { 
      type: SET_USER,
      user
    };
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
        if (json.token && json.user) {
          // dispatch to save auth-token
          dispatch(setLogin(json.token));
          dispatch(setUser(json.user));
          return true;
        } else {
          dispatch(logout());
          return false;
        }
      });
  };
}

function fbLogin() {
  return async dispatch => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      FB_APP_ID,
      {
        permissions: ["public_profile", "email"]
      }
    );
    if (type === "success") {
      return fetch(`${API_URL}/users/login/facebook/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_token: token
        })
      })
        .then(res => res.json())
        .then(json => {
          if (json.token) {
            dispatch(setLogin(json.token));
            return true;
          } else {
            dispatch(logout());
            return false;
          }
        });
    } else {
      return console.log(`access denied`);
    }
  };
}

function getOwnProfile() {
  return (dispatch, getState) => {
    const {
      user: {
        token,
        profile: { pk }
      }
    } = getState();
    const {user:{profile}} = getState();
    console.log(profile)
    fetch(`${API_URL}/users/${pk}/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setUser(json)));
  };
}

function getProfile(username) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    return fetch(`${API_URL}/users/${username}/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(logOut());
        } else {
          return response.json();
        }
      })
      .then(json => json);
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
    case SET_USER:
      return applySetUser(state, action);
    default:
      return state;
  }
}

// reducer functions

function applyLogin(state, action) {
  const { token } = action;
  AsyncStorage.setItem("token", token); // save the auth-token
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

function applyLogout(state, action) {
  AsyncStorage.clear(); // clear the auth-token
  return {
    ...state,
    isLoggedIn: false,
    token: ""
  };
}

function applySetUser(state, action) {
  const { user } = action;
  return {
    ...state,
    profile: user
  };
}

// exports

const actionCreator = {
  login,
  logout,
  fbLogin,
  getOwnProfile,
  getProfile
};

export { actionCreator };

// default export

export default reducer;
