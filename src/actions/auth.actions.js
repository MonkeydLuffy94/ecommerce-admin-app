import { authConstants } from "./constants";
import axios from "../helpers/axios";

export const login = user => {
  return async dispatch => {
    const { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } = authConstants;

    dispatch({ type: LOGIN_REQUEST });

    const res = await axios.post("/admin/signin", user);

    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token, user },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: LOGIN_FAILURE,
          payload: { error: res.data.message },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  const { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } = authConstants;

  return async dispatch => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token, user },
      });
    } else {
      dispatch({
        type: LOGIN_FAILURE,
        payload: {
          error: "Failed to login",
        },
      });
    }
  };
};
