import { Alert } from "./Alert";

const SHOW_ALERT = "APP/SHOW_ALERT";
const HIDE_ALERT = "APP/HIDE_ALERT";

export interface ShowAlertAction {
  type: typeof SHOW_ALERT;
  payload: Alert;
}

export interface HideAlertAction {
  type: typeof HIDE_ALERT;
}

export type AlertActionTypes = ShowAlertAction | HideAlertAction;

export { SHOW_ALERT, HIDE_ALERT };
