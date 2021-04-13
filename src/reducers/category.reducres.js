import { categoryConstants } from "../actions/constants";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  console.log("inside category reducer", action);
  let newState;
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORY_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case categoryConstants.GET_ALL_CATEGORY_SUCCESS: {
      newState = {
        ...state,
        loading: false,
        categories: action.payload,
      };
      break;
    }

    case categoryConstants.GET_ALL_CATEGORY_FAILURE: {
      newState = {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;
    }

    default:
      newState = state ;
  }
  return newState;
};

export default categoryReducer;
