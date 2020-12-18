//actions type
export const userActions = {
  USER_REQUEST: "USER_REQUEST",
  USER_SUCCESS: "USER_SUCCESS",
  USER_FAILED: "USER_FAILED"
};

//initial state
const INITIAL_STATE = {
  user: { name: "Anis Maghfiroh" },
  isFetching: false,
  errMessage: undefined
};

//reducer

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActions.USER_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case userActions.USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload
      };

    case userActions.USER_FAILED:
      return {
        ...state,
        errMessage: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;

//action creators
export const userRequest = () => ({
  type: userActions.USER_REQUEST
});

export const userSuccess = (userName) => ({
  type: userActions.USER_SUCCESS,
  payload: userName
});

export const userFailed = (errMsg) => ({
  type: userActions.USER_FAILED,
  payload: errMsg
});
