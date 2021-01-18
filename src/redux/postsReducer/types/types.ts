import { Post } from "./Post";

const CREATE_POST = "POST/CREATE_POST";
const FETCH_POSTS = "POST/FETCH_POSTS";
const FETCH_SAGA_POSTS = "POST/FETCH_SAGA_POSTS";

export interface CreatePostAction {
  type: typeof CREATE_POST;
  payload: Post;
}

export interface FetchPostsAction {
  type: typeof FETCH_POSTS;
  payload: Post[];
}
export interface FetchSagaPostsAction {
  type: typeof FETCH_SAGA_POSTS;
  payload: Post[];
}

export type PostActionTypes = CreatePostAction | FetchPostsAction | FetchSagaPostsAction;

export { CREATE_POST, FETCH_POSTS, FETCH_SAGA_POSTS };
