import { Dispatch } from "redux";
import { AppActions } from "../../rootTypes";
import { Alert } from "../types/Alert";
import { HIDE_ALERT, SHOW_ALERT } from "../types/types";

export function showAlert(text: Alert): (dispatch: Dispatch<AppActions>) => void {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };
}

export function hideAlert(): AppActions {
  return {
    type: HIDE_ALERT,
  };
}
