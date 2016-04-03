import fetch from 'isomorphic-fetch'


// ------------------------------------
// Constants
// ------------------------------------

export const REQUEST_CONTESTS = 'REQUEST_CONTESTS';
export const RECEIVE_CONTESTS = 'RECEIVE_CONTESTS';

// ------------------------------------
// Actions
// ------------------------------------

function requestContests() {
  return {
    type: REQUEST_CONTESTS
  }
}

function receiveContests(json) {
  return {
    type: RECEIVE_CONTESTS,
    contests: json,
    receivedAt: Date.now()
  }
}

function fetchContests() {
  return dispatch => {
    dispatch(requestContests());
    return fetch(`http://localhost:3001/contests`)
      .then(response => response.json())
      .then(response => dispatch(receiveContests(response.data)))
  }
}


function shouldFetchContests(state) {
  const contests = state.contests;
  if (!contests) {
    return false
  } else if (contests.isFetching) {
    return false
  } else if (!contests.items.length) {
    setTimeout(()=> {
      return false
    }, 1000);
  } else {
    return contests.didInvalidate;
  }
}

export function fetchContestsIfNeeded(force) {
  return (dispatch, getState) => {
    if (shouldFetchContests(getState()) || force) {
      return dispatch(fetchContests())
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

export default function contests(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_CONTESTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_CONTESTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.contests,
        lastUpdated: action.receivedAt
      });
    default:
      return state
  }
}