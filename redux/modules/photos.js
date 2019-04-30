// import

import { API_URL } from "../../constants";

// actions

const SET_FEED = "SET_FEED";

// actions creators

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

// API Actions

function getFeed() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`${API_URL}/images/`, {
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(setFeed(json))
    })
  };
}

// Initial State

const initialState = {};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    default:
      return state;
  }
}

// Reducer functions

function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

// exports

const actionCreators = {
  getFeed
};

export { actionCreators };

// default export

export default reducer;
