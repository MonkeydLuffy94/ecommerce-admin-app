import { registerConstants } from "./constants";
import axios from "../helpers/axios";

export const register = user => {
  return async dispatch => {
    const {
      REGISTER_REQUEST,
      REGISTER_FAILURE,
      REGISTER_SUCCESS,
    } = registerConstants;

    dispatch({ type: REGISTER_REQUEST });

    const res = await axios.post("/admin/signup", user);

    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { message },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: REGISTER_FAILURE,
          payload: { error: res.data.message },
        });
      }
    }
  };
};
