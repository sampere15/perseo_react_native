import { LOADING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../actionTypes/authTypes";

import axiosClient from "../../utils/axios";
import manageToken from "../../utils/manageToken";

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
      bodyFormData.append("device", userData.device);

      const {data} = await axiosClient.post("/Login.php", bodyFormData);

      //  Checking no error on response
      if (!data.error) {
        //  Store auth token needed for API request
        await manageToken.storeTokenSecureStore(data.token);

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
    await manageToken.deleteTokenSecureStore();
    //  Send the dispatch to delete the token
    dispatch({
      type: LOGOUT,
    });
  };
}
