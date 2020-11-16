import {
  DOWNLOADING,
  DOWNLOADING_SUCCESS,
  DOWNLOADING_ERROR,
  ITEM_FAV_ADD,
  ITEM_FAV_REMOVE,
  APPLY_FILTER,
  CLEAR_FILTER,
} from "../actionTypes/mediaTypes";

//  Import Mock data for testing
// import mockData from "../../mocks/mockData";

import axiosClient from "../../utils/axios";
import { logoutAction } from "./authActions";

//  Action for download files for the main page
export function getFilesAction() {
  return async (dispatch) => {
    try {
      //  Check if we dont have token, lets log out
      const token = localStorage.getItem("token");
      if (token === null) {
        dispatch(logoutAction());
        return;
      }

      //  To show loading spineer
      dispatch({
        type: DOWNLOADING,
      });

      //  Preparing post data
      const bodyFormData = new FormData();
      bodyFormData.append("token", token);
      bodyFormData.append("device", "Web");
      const res = await axiosClient.post("/GetView.php", bodyFormData);

      //  My Mock Data for testing
      // let res = {};
      // res.data = mockData;

      dispatch({
        type: DOWNLOADING_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: DOWNLOADING_ERROR,
      });
    }
  };
}

//  Action when we click item start to mark it as fav or unmark
export function markItemFavAction(itemId, fav) {
  return (dispatch) => {
    //  Mark as fav
    if (fav) {
      dispatch({
        type: ITEM_FAV_ADD,
        payload: itemId,
      });
    }
    //  Unmark as fav
    else {
      dispatch({
        type: ITEM_FAV_REMOVE,
        payload: itemId,
      });
    }
  };
}

//  Action to apply filter and search in the files
export function filterItemsAction(filter) {
  return (dispatch) => {
    if (filter.length > 0) {
      dispatch({
        type: APPLY_FILTER,
        payload: filter.toLowerCase(),
      });
    } else {
      dispatch({
        type: CLEAR_FILTER,
      });
    }
  };
}
