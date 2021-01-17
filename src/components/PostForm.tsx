import React from 'react';
import { PostType } from './post.model';

export default class PostForm extends React.Component<{}, PostType | any> {
    constructor(props: { state: object }) {
        super(props);
        this.state = {
            title: '',
        };
    }

    private submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    private changeInputHandler = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState((prevState: PostType) => ({
            ...prevState,
            ...{
                [name]: value,
            },
        }));
    };

    public render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className='form-group'>
                    <label htmlFor='title'>Post's title</label>
                    <input
                        type='text'
                        name={'title'}
                        id={'title'}
                        className={'form-control'}
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className='btn btn-success' type={'submit'}>
                    {'Create'}
                </button>
            </form>
        );
    }
}
