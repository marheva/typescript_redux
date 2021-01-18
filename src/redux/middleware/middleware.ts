import { AnyAction, CombinedState, Dispatch, Middleware } from "redux";
import { showAlert } from "../alertReducer/actions/actions";
import { Alert } from "../alertReducer/types/Alert";
import { Loader } from "../appReducer/types/Loader";
import { Post } from "../postsReducer/types/Post";
import { CREATE_POST } from "../postsReducer/types/types";

const forbidden: string[] = ["fuck", "spam", "pht"];

export function forbiddenWordsMiddleware({
  dispatch,
}: any): ({
  dispatch,
}: any) => Middleware<{}, CombinedState<{ posts: Post[]; app: Loader; alert: Alert }>, Dispatch<AnyAction>> {
  return function (next: any) {
    return function (action: any) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter((element) => action.payload.title.includes(element));
        if (found.length) {
          dispatch(showAlert(("SPAM" as unknown) as Alert));
        }
      }
      return next(action);
    };
  };
}
