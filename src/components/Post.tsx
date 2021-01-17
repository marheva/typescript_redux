import React from 'react';
import { PostType } from './post.model';

interface PostProps extends PostType {}

export default function Post({ title }: PostProps): JSX.Element {
    return (
        <div className={'card'}>
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
            </div>
        </div>
    );
}
