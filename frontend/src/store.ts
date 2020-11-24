import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";
import { AuthenticationPayload } from "./types/userTypes";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const userInfoFromStorage: AuthenticationPayload = localStorage.getItem(
  "userInfo"
)
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
    error: undefined,
    loading: undefined,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootStore = ReturnType<typeof reducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStore,
  unknown,
  Action<string>
>;

export default store;
