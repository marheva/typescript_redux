import { Post } from "../types/Post";
import { AppActions, CREATE_POST } from "../types/types";

export default function createPost(post: Post): AppActions {
    return {
      type: CREATE_POST ,
      payload: post
    }
};