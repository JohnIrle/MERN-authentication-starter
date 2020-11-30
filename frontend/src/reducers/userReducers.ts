import {
  UserLoginTypes,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  CLEAR_ERRORS,
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
  AuthenticationPayload,
  ErrorPayload,
  USER_UPDATEPROFILE_RESET,
  UserListTypes,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
} from "../types/userTypes";

export interface AuthenticationState {
  userInfo?: AuthenticationPayload;
  loading?: boolean;
  error?: ErrorPayload;
}

const initialState: AuthenticationState = {};

export const userLoginReducer = (
  state = initialState,
  action: UserLoginTypes
): AuthenticationState => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: true, error: action.payload };
    case USER_LOGOUT:
      return {};
    case CLEAR_ERRORS:
      return { ...state, error: undefined };
    default:
      return state;
  }
};

export const userRegisterReducer = (
  state = initialState,
  action: UserRegisterTypes
): AuthenticationState => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: true, error: action.payload };
    default:
      return state;
  }
};

export interface UserDetailsState {
  user?: AuthenticationPayload;
  loading?: boolean;
  error?: ErrorPayload;
}

export const userDetailsReducer = (
  state = {},
  action: UserDetailsTypes
): UserDetailsState => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: true, error: action.payload };
    default:
      return state;
  }
};

export interface UpdateProfileState {
  userInfo?: AuthenticationPayload;
  loading?: boolean;
  error?: ErrorPayload;
  success?: boolean;
}

export const userUpdateProfileReducer = (
  state = {},
  action: UserUpdateDetailsTypes
): UpdateProfileState => {
  switch (action.type) {
    case USER_UPDATEPROFILE_REQUEST:
      return { loading: true };
    case USER_UPDATEPROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_UPDATEPROFILE_FAIL:
      return { loading: true, error: action.payload };
    case USER_UPDATEPROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export interface UserListState {
  usersList?: AuthenticationPayload[];
  loading?: boolean;
  error?: ErrorPayload;
}

const initialListState = {};

export const userListReducer = (
  state = initialListState,
  action: UserListTypes
): UserListState => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, usersList: action.payload };
    case USER_LIST_FAIL:
      return { loading: true, error: action.payload };
    case USER_LIST_RESET:
      return {
        usersList: [],
      };
    default:
      return state;
  }
};
