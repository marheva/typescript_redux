import { Loader } from "./Loader";

const SHOW_LOADER = "APP/SHOW_LOADER";
const HIDE_LOADER = "APP/HIDE_LOADER";

export interface ShowLoaderAction {
  type: typeof SHOW_LOADER;
}

export interface HideLoaderAction {
  type: typeof HIDE_LOADER;
}

export type PostActionTypes = ShowLoaderAction | HideLoaderAction;
export type PostActions = PostActionTypes;

export { SHOW_LOADER, HIDE_LOADER };
