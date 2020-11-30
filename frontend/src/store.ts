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
  userListReducer,
} from "./reducers/userReducers";
import { AuthenticationPayload } from "./types/userTypes";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
});

const userInfoFromStorage: AuthenticationPayload = localStorage.getItem(
  "userInfo"
)
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
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
