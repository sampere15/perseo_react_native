import { LOADING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../actionTypes/authTypes";
import * as SecureStore from 'expo-secure-store';

const initialState = {
  loading: false, //  waiting for the loggin response
  auth: false, //  if we are logged
  errorMessage: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        auth: false,
        errorMessage: action.payload,
      };
    case LOGIN_SUCCESS:
      //  Store auth token needed for API request
      SecureStore.setItemAsync("token", action.payload.token);
      return {
        ...state,
        loading: false,
        auth: true,
        errorMessage: null,
      };
    case LOGOUT:
      //  Delete auth token
      SecureStore.deleteItemAsync("token");
      return {
        ...state,
        auth: false,
        loading: false,
      };
    default:
      return state;
  }
}
