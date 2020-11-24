import axios from "axios";
import { Dispatch } from "redux";
import { AppThunk } from "../store";
import {
  UserLoginTypes,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  UserRegisterTypes,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  UserDetailsTypes,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  UserUpdateDetailsTypes,
  USER_UPDATEPROFILE_REQUEST,
  USER_UPDATEPROFILE_SUCCESS,
  USER_UPDATEPROFILE_FAIL,
  USER_LOGOUT,
  AuthenticationPayload,
} from "../types/userTypes";

export const login = (email: string, password: string): AppThunk => async (
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

export const register = (
  name: string,
  email: string,
  password: string
): AppThunk => async (dispatch: Dispatch<UserRegisterTypes>) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const { data } = await axios.post("/api/users", { name, email, password });

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = (id: string): AppThunk => async (
  dispatch: Dispatch<UserDetailsTypes>,
  getState
) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo!.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile = (
  user: AuthenticationPayload
): AppThunk => async (dispatch: Dispatch<UserUpdateDetailsTypes>, getState) => {
  try {
    dispatch({
      type: USER_UPDATEPROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo!.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch({
      type: USER_UPDATEPROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATEPROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = (): AppThunk => (dispatch: Dispatch<UserLoginTypes>) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};
