import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action, Dispatch } from "redux";
import { RootStore } from "../store";
import {
  UserLoginTypes,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../types/userTypes";

export const login = (
  email: string,
  password: string
): ThunkAction<void, RootStore, null, Action<String>> => async (
  dispatch: Dispatch<UserLoginTypes>
) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const { data } = await axios.post("/api/users/login", { email, password });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
