import { AppActions } from "../../rootTypes";
import { HIDE_ALERT, SHOW_ALERT } from "../types/types";

export function showAlert(): AppActions {
  return {
    type: SHOW_ALERT,
  };
}

export function hideAlert(): AppActions {
  return {
    type: HIDE_ALERT,
  };
}
