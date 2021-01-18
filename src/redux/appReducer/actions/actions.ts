import { HIDE_LOADER, PostActions, SHOW_LOADER } from "../types/types";

export function showLoader(): PostActions {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader(): PostActions {
  return {
    type: HIDE_LOADER,
  };
}
