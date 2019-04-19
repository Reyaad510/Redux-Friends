import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';


class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    handleLogin = e => {
        e.preventDefault();
        this.props
          .login(this.state.credentials)
          .then(() => this.props.history.push('/protected'));
    }

    render() {
        return (

            <div>
              <form onSubmit={this.handleLogin}>
                <input
                   type='text'
                   name='username'
                   value={this.state.credentials.username}
                   onChange={this.handleChange}
                    />
                <input
                    type='password'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
                <button> Log In</button>
            </form>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggingIn: state.friendsReducer.isLoggingIn
    }
}


export default connect(
    mapStateToProps, { login }
)(Login)

// Lambda School i<3Lambd4