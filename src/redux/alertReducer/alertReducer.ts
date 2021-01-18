import { Alert } from "./types/Alert";
import { AlertActionTypes, HIDE_ALERT, SHOW_ALERT } from "./types/types";

const initialState: Alert = {
  alert: null,
};

export default function alertReducer(state = initialState, action: AlertActionTypes) {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: false };
    default:
      return state;
  }
}
