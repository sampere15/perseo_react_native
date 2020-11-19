import {
  DOWNLOADING,
  DOWNLOADING_SUCCESS,
  DOWNLOADING_ERROR,
  ITEM_FAV_ADD,
  ITEM_FAV_REMOVE,
  APPLY_FILTER,
  CLEAR_FILTER,
  CLEAR_DATA,
} from "../actionTypes/mediaTypes";

//  Import Mock data for testing
// import mockData from "../../mockData/mockMedia";

import axiosClient from "../../utils/axios";
import { Endpoints } from "../../utils/global";
// import tokenManager from "../../utils/tokenManager";

//  Action for download files for the main page
export function getFilesAction() {
  return async (dispatch) => {
    try {
      //  To show loading spineer
      dispatch({
        type: DOWNLOADING,
      });

      //  Preparing post data
      const bodyFormData = new FormData();
      const { data } = await axiosClient.post(Endpoints.MAIN, bodyFormData);

      //  My Mock Data for testing
      // const data = mockData;

      dispatch({
        type: DOWNLOADING_SUCCESS,
        payload: data,
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
      //  To show un loading spinner
      // dispatch({
      //   type: APPLYING_FILTER,
      //   payload: true,
      // });

      dispatch({
        type: APPLY_FILTER,
        payload: filter,
      });

      // setTimeout(() => {
      //   dispatch({
      //     type: APPLYING_FILTER,
      //     payload: false,
      //   });
      // }, 3000);

    } else {
      dispatch({
        type: CLEAR_FILTER,
      });
    }
  };
}

//  Action for clear data
export function clearReducerData() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_DATA
    });
  }
}
