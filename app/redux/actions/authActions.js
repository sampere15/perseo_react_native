import { LOADING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../actionTypes/authTypes";

import axiosClient from "../../utils/axios";

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

      let result = await axiosClient.post("/Login.php", bodyFormData);
      console.log(result.data);

      //  Checking no error on response
      if (!result.data.error) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: result.data,
        });
      } else {
        dispatch({
          type: LOGIN_ERROR,
          payload: result.data.message,
        });
      }
    } catch (error) {
      console.log(error);
      //  Hide "sending data"
      Swal.close();
      //  Call action that show the error
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };
}

//  Function for logout
export function logoutAction() {
  return (dispatch) => {
    //  Send the dispatch to delete the token
    dispatch({
      type: LOGOUT,
    });
  };
}
