import { LOADING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../actionTypes/authTypes";

import axiosClient from "../../utils/axios";
import tokenManager from "../../utils/tokenManager";
import { clearReducerData } from "./mediaActions";

//  Action for login
export function loginAction(userData) {
  return async (dispatch) => {
    try {
      //  Change the state
      dispatch({
        type: LOADING,
      });

      //  Preparing post data
      const bodyFormData = new FormData();
      bodyFormData.append("user", userData.user);
      bodyFormData.append("pass", userData.pass);

      const {data} = await axiosClient.login(bodyFormData);

      //  Checking no error on response
      if (!data.error) {
        //  Store auth token needed for API request
        await tokenManager.storeTokenSecureStore(data.token);

        dispatch({
          type: LOGIN_SUCCESS,
        });
      } else {
        dispatch({
          type: LOGIN_ERROR,
          payload: data.message,
        });
      }
    } catch (error) {
      console.log(error);
      //  Call action that show the error
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };
}

//  Function for logout
export function logoutAction() {
  return async (dispatch) => {
    await tokenManager.deleteTokenSecureStore();
    console.log("token deleted");
    //  Send the dispatch to delete the token
    dispatch({
      type: LOGOUT,
    });

    dispatch(clearReducerData());
    console.log("Cleared media reducer data");
  };
}

//  Function to verify token and mark user as auth
export function verifyToken(token) {
  return async (dispatch) => {
    // dispatch({
    //   type: LOADING
    // });

    if(token !== null) {
      dispatch({
        type: LOGIN_SUCCESS
      });
    } else {
      dispatch({
        type: LOGIN_ERROR,
        payload: "Token no valid or expired",
      });
    }
  }
}
