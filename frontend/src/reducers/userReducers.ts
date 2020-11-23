import {
  UserLoginTypes,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  UserRegisterTypes,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  UserDetailsTypes,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  UserUpdateDetailsTypes,
  USER_UPDATEPROFILE_REQUEST,
  USER_UPDATEPROFILE_SUCCESS,
  USER_UPDATEPROFILE_FAIL,
} from "../types/userTypes";

export const userLoginReducer = (state = {}, action: UserLoginTypes) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: true, payload: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action: UserRegisterTypes) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: true, payload: action.payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = {}, action: UserDetailsTypes) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: true, payload: action.payload };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (
  state = {},
  action: UserUpdateDetailsTypes
) => {
  switch (action.type) {
    case USER_UPDATEPROFILE_REQUEST:
      return { loading: true };
    case USER_UPDATEPROFILE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_UPDATEPROFILE_FAIL:
      return { loading: true, payload: action.payload };
    default:
      return state;
  }
};
