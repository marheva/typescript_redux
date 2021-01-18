import { takeEvery, put, call } from "redux-saga/effects";
import { hideLoader, showLoader } from "../appReducer/actions/actions";
import { fetchSagaPosts } from "../postsReducer/actions/actions";
import { FETCH_SAGA_POSTS } from "../postsReducer/types/types";

export function* sagaWatcher(): any {
  yield takeEvery(FETCH_SAGA_POSTS, sagaWorker);
}

function* sagaWorker() {
  yield put(showLoader());
  const payload = yield call(fetchPosts);
  yield put({
    type: FETCH_SAGA_POSTS,
    payload,
  });
  yield put(hideLoader());
}

async function fetchPosts(): Promise<any> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  return await response.json();
}
