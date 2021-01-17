import { Post } from "./Post";

const CREATE_POST = 'POST/CREATE_POST'

export interface CreatePostAction {
    type: typeof CREATE_POST;
    payload: Post;
  }
  
  export type PostActionTypes = CreatePostAction
  export type AppActions = PostActionTypes;

export {
    CREATE_POST
}