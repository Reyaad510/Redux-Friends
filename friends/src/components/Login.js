import React from 'react';
import { connect } from 'react-redux';


class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    render() {
        return (

            <div>
                <form>
                    <input 
                    type='text'
                    name='username'
                    />
                    <input 
                    type='password'
                    name='password'
                    />
                    <button> Log In</button>
                </form>
            </div>
        );
    }
}

export default connect(
    null, {}
)(Login)