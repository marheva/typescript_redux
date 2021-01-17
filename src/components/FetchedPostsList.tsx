import React from 'react';
import Post from './Post';
import { PostType } from './post.model';

interface FetchedPostsListProps {
    posts: PostType[];
}

export default function FetchedPostsList({
    posts,
}: FetchedPostsListProps): JSX.Element {
    return (
        <div>
            {!posts.length ? (
                <button className={'btn btn-primary'}>
                    {'Download Posts'}
                </button>
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
