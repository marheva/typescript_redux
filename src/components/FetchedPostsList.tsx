import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postsReducer/actions/actions';
import Post from './Post';
import { PostType } from './post.model';

interface FetchedPostsListProps {
    posts: PostType[];
}

function FetchedPostsList(): JSX.Element {
    const dispatch = useDispatch();
    const posts = useSelector((state: any) => state.posts.fetchedPosts);
    return (
        <div>
            {!posts.length ? (
                <button
                    className={'btn btn-primary'}
                    onClick={() => dispatch(fetchPosts())}
                >
                    {'Download Posts'}
                </button>
            ) : (
                <ul>
                    {posts.map((post: any) => (
                        <li key={post.id}>
                            <Post title={post.title} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FetchedPostsList;
