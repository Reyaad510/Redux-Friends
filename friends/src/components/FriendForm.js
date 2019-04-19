import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class FriendForm extends React.Component {
    state = {
        newFriend: {
        name: '',
        email:'',
        age:''
        }
    }

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        });
    }

    handleFriendForm = e => {
        e.preventDefault();
        this.props
          .addFriend(this.state.newFriend)

          

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

const mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends
    }
}

export default connect(
    mapStateToProps, { addFriend }
)(FriendForm)