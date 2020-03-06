
// ------------------------------------
// Constants
// ------------------------------------
const LOGGED_IN = 'LOGGED_IN'

const initialState = {
  checked: true,
  loggedIn: false,
  accessToken: null,
  me: {},
}

// ------------------------------------
// Actions
// ------------------------------------

// TODO: check the user's login state
export const authenticate = (accessToken, me) => dispatch => dispatch({
  type: LOGGED_IN,
  loggedIn: true,
  checked: true,
  accessToken,
  me,
})

export const actions = {
  authenticate,
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [LOGGED_IN]: (state, { loggedIn, checked, accessToken, me }) => ({
    ...state,
    loggedIn,
    checked,
    accessToken,
    me,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
