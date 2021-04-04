import { registerConstants } from "../actions/constants";

const initalState = {
  error: null,
  message: "",
  loading: false,
};

const registerReducer = (state = initalState, action) => {
  let newState;
  switch (action.type) {

    case registerConstants.REGISTER_REQUEST:
    console.log("register request in reducer");

      newState = {
        ...state,
        loading: true,
      };
      break;
    case registerConstants.REGISTER_SUCCESS:
    console.log("register success in reducer");

      const { message } = action.payload;
      newState = {
        ...state,
        loading: false,
        message,
      };
      break;
    case registerConstants.REGISTER_FAILURE:
    console.log("register failure in reducer");

      const { error } = action.payload;
      newState = {
        ...state,
        loading: false,
        error,
      };
      break;
    default:
      newState = {
        ...state,
      };
  }

  return newState;
};

export default registerReducer;
