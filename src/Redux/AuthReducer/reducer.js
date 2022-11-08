import { saveData } from "../../utils/accessLocalStorage";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS
} from "./actionType";

const initState = {
  isAuth: false,
  token: "",
  isAuthLoading: false,
  isAuthError: false
};

export const reducer = (oldState = initState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST: {
      return {
        ...oldState,
        isAuthLoading: true
      };
    }
    case USER_LOGIN_ERROR: {
      return {
        ...oldState,
        isAuthError: true,
        isAuthLoading: false
      };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: false,
        isAuth: true,
        token: payload
      };
    }
    default:
      return oldState;
  }
};
