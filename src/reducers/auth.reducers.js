import { authConstants } from "../actions/constants";

const initialState = {
  token: null,
  user: {
    firstName: "",
    lastname: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};

const authReducer = (state = initialState, action) => {
  console.log(action);
  let newState;
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      newState = {
        ...state,
        authenticating: true,
        ...action.payload,
      };
      break;
    case authConstants.LOGIN_SUCCESS: {
      const { user, token } = action.payload;
      newState = {
        ...state,
        user,
        token,
        authenticate: true,
        authenticating: false,
      };
      break;
    }
    case authConstants.LOGIN_FAILURE: {
      const { error } = action.payload;
      newState = {
        ...state,
        authenticate: false,
        authenticating: false,
        error,
      };
      break;
    }
    case authConstants.LOGOUT_REQUEST:
      console.log("token", localStorage.getItem("token"));
      newState = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      newState = {
        ...initialState,
      };
      break;
    case authConstants.LOGOUT_FAILURE: {
      const { error } = action.payload;
      newState = {
        ...state,
        error,
        loading: false,
      };
      break;
    }
    default:
      newState = {
        ...state,
      };
  }

  return newState;
};

export default authReducer;
