// import

import { API_URL } from "../../constants";

// actions

const SET_FEED = "SET_FEED";
const LIKE_PHOTO = "LIKE_PHOTO";
const UNLIKE_PHOTO = "UNLIKE_PHOTO";

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
      } else if (!res.ok) {
        dispatch(doUnLikePhoto(photoId));
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
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(res => {
      if (res.status === 401) {
      } else if (!res.ok) {
        dispatch(doLikePhoto(photoId));
      }
    });
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
  const { feed } = state;
  const updatedFeed = feed.map(photo=> {
    if(photo.id === photoId) {
      return {...photo, is_liked: true, like_count: photo.like_count+1}
    }
    return photo
  })
  return {
    ...state,
    feed: updatedFeed
  };
}
function applyUnLikePhoto(state, action) {
  const { photoId } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo=> {
    if(photo.id === photoId) {
      return {...photo, is_liked: false, like_count: photo.like_count-1}
    }
    return photo
  })
  return {
    ...state,
    feed: updatedFeed
  };
}

// exports

const actionCreators = {
  getFeed,
  likePhoto,
  unLikePhoto
};

export { actionCreators };

// default export

export default reducer;
