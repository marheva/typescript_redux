import { AlertActionTypes } from "./alertReducer/types/types";
import { AppActionTypes } from "./appReducer/types/types";
import { PostActionTypes } from "./postsReducer/types/types";

export type AppActions = PostActionTypes | AppActionTypes | AlertActionTypes;
