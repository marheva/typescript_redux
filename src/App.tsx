import React from 'react';
import FetchedPostsList from './components/FetchedPostsList';
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';

const App: React.FC = () => {
    return (
        <div className={'container pt-3'}>
            <div className='row'>
                <div className='col'>
                    <PostForm />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h2>Синхронні пости</h2>
                    <PostsList />
                </div>
                <div className='col'>
                    <h2>Acинхронні пости</h2>
                    <FetchedPostsList posts={[]} />
                </div>
            </div>
        </div>
    );
};

export default App;
