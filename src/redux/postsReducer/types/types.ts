import { Post } from "./Post";

const CREATE_POST = "POST/CREATE_POST";
const FETCH_POSTS = "POST/FETCH_POSTS";

export interface CreatePostAction {
  type: typeof CREATE_POST;
  payload: Post;
}

export interface FetchPostsAction {
  type: typeof FETCH_POSTS;
  payload: Post[];
}

export type PostActionTypes = CreatePostAction | FetchPostsAction;

export { CREATE_POST, FETCH_POSTS };
