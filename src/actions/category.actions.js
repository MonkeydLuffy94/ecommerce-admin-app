import axios from "../helpers/axios";
import { categoryConstants } from "./constants";

export const getAllCategory = () => {
  const {
    GET_ALL_CATEGORY_REQUEST,
    GET_ALL_CATEGORY_SUCCESS,
    GET_ALL_CATEGORY_FAILURE,
  } = categoryConstants;

  return async dispatch => {
    dispatch({ type: GET_ALL_CATEGORY_REQUEST });
    const res = await axios.get("category/getcategories");

    if (res.status === 200) {
      // const { categoryList } = res.data;

      dispatch({ type: GET_ALL_CATEGORY_SUCCESS, payload: res.data.message });
    } else {
      dispatch({
        type: GET_ALL_CATEGORY_FAILURE,
        payload: { error: res.data.message },
      });
    }
  };
};
