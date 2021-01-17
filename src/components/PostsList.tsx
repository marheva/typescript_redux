import React from 'react';
import Post from './Post';
import { PostType } from './post.model';

interface PostsListProps {
    posts: PostType[];
}

export default function PostsList({ posts }: PostsListProps): JSX.Element {
    return (
        <div>
            {!posts.length ? (
                <p>{'NO POSTS'}</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Post title={post.title} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
