import React from 'react';
import { connect } from 'react-redux';

class FriendForm extends React.Component {
    state = {
        name: '',
        email:'',
        age:''
    }

    handleChange = e => {
        this.setState({
                [e.target.name]: e.target.value
            }
        );
    }

    handleFriendForm = e => {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleFriendForm}>
                <input
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
                placeholder='Name'
                />
                    <input
                type='text'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                placeholder='Email'
                />
                    <input
                type='text'
                name='age'
                value={this.state.age}
                onChange={this.handleChange}
                placeholder='Age'
                />
                <button>Add New Friend</button>
            </form>
        )
    }
}

export default connect(
    null, {}
)(FriendForm)