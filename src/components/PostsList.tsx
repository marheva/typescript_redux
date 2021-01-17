import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../redux/rootReducer';
import Post from './Post';
import { PostType } from './post.model';

interface LinkStateProps {
    syncPosts?: PostType[];
}

function PostsList({ syncPosts }: LinkStateProps): JSX.Element {
    return (
        <div>
            {!syncPosts!.length ? (
                <p>{'NO POSTS'}</p>
            ) : (
                <ul>
                    {syncPosts!.map((post) => (
                        <li key={post.id}>
                            <Post title={post.title} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function mapStateToProps(state: AppState): LinkStateProps | any {
    return { syncPosts: state.posts.posts };
}

export default connect(mapStateToProps, null)(PostsList);
