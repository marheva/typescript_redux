import React from 'react';
import { connect } from 'react-redux';
import { showAlert } from '../redux/alertReducer/actions/actions';
import { createPost } from '../redux/postsReducer/actions/actions';
import Alert from './Alert/Alert';
import { PostType } from './post.model';

class PostForm extends React.Component<any, PostType> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
        };
    }

    private submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { title } = this.state;
        if (!title.trim()) {
            return this.props.showAlert('ERROR');
        }
        const newPost = {
            title: title,
            id: Date.now().toString(),
            content: 'STATIC CONTENT',
        };
        this.props.createPost(newPost);
        this.setState({ title: '' });
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
                {!!this.props.alert && <Alert type={'primary'} text={this.props.alert} />}
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
const mapDispatchToProps = {
    createPost: createPost,
    showAlert: showAlert
};

const mapStateToProps = (state: any) => ({
    alert: state.alert.alert
})
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
