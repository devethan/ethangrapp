// import

import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";

// actions

const SET_FEED = "SET_FEED";
const LIKE_PHOTO = "LIKE_PHOTO";
const UNLIKE_PHOTO = "UNLIKE_PHOTO";
const SET_USER_LIST = "SET_USER_LIST";
const SET_SEARCH = "SET_SEARCH";

// actions creators

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}
function doLikePhoto(photoId) {
  return {
    type: LIKE_PHOTO,
    photoId
  };
}
function doUnLikePhoto(photoId) {
  return {
    type: UNLIKE_PHOTO,
    photoId
  };
}
function setUserList(userList) {
  return {
    type: SET_USER_LIST,
    userList
  };
}
function setSearch(search) {
  return {
    type: SET_SEARCH,
    search
  };
}

// API Actions

function getFeed() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    return fetch(`${API_URL}/images/`, {
      method: "GET",
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch(setFeed(json));
      });
  };
}

function likePhoto(photoId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    return fetch(`${API_URL}/images/${photoId}/likes/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(res => {
      if (res.status === 401) {
        dispatch(userActions.logOut());
      } else if (res.ok) {
        return true;
      } else {
        dispatch(doUnLikePhoto(photoId))
        return false;
      }
    });
  };
}
function unLikePhoto(photoId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    return fetch(`${API_URL}/images/${photoId}/unlikes/`, {
      method: "DELETE",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(res => {
      if (res.status === 401) {
        dispatch(userActions.logOut());
      } else if (res.ok) {
        return true;
      } else {
        dispatch(doLikePhoto(photoId))
        return false;
      }
    });
  };
}
function getLikePhoto(photoId) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    return fetch(`${API_URL}/images/${photoId}/likes/`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(res => {
      if (res.status === 401) {
        dispatch(userActions.logOut());
      } else {
        return res.json();
      }
    })
    .then(json =>{
      dispatch(setUserList(json))
    })
  };
}

function getSearch() {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`${API_URL}/images/search/`, {
      headers: {
        // "Content-Type": "application/json",
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => {
        dispatch(setSearch(json));
      });
  };
}

function searchByHashtag(hashtag) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    fetch(`${API_URL}/images/search/?hashtags=${hashtag}`, {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logOut());
        } else {
          return response.json();
        }
      })
      .then(json => dispatch(setSearch(json)));
  };
}

// Initial State

const initialState = {};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    case LIKE_PHOTO:
      return applyLikePhoto(state, action);
    case UNLIKE_PHOTO:
      return applyUnLikePhoto(state, action);
    case SET_USER_LIST:
      return applySetUserList(state, action);
    case SET_SEARCH:
      return applySetSearch(state, action);
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
function applyLikePhoto(state, action) {
  const { photoId } = action;
  return {
    ...state,
    photoId
  };
}
function applyUnLikePhoto(state, action) {
  const { photoId } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return { ...photo, is_liked: false, like_count: photo.like_count - 1 };
    }
    return photo;
  });
  return {
    ...state,
    feed: updatedFeed
  };
}
function applySetUserList(state, action) {
  const { userList } = action;
  return {
    ...state,
    userList
  };
}
function applySetSearch(state, action) {
  const { search } = action;
  return {
    ...state,
    search
  };
}

// exports

const actionCreators = {
  getFeed,
  likePhoto,
  unLikePhoto,
  getLikePhoto,
  getSearch,
  searchByHashtag
};

export { actionCreators };

// default export

export default reducer;
