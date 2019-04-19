import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData } from '../actions';
import FriendForm from './FriendForm';


class FriendsList extends React.Component {


    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <>
            <FriendForm />
            <div className='friends'>
                {this.props.friends.map(friend => {
                    return (
                        <div className='friend-info'>
                        <h3>{friend.name}</h3>
                        <p>
                            <strong>Email:</strong> {friend.email}
                        </p>
                        <p>
                            <strong>Age:</strong> {friend.age}
                        </p>
                        </div>
                    )
                })}
                </div>
                
                </>
        )
    }

}

const mapStateToProps = state => ({
    friends: state.friendsReducer.friends,
    fetchingData: state.friendsReducer.fetchingData
});

export default withRouter(
    connect(mapStateToProps, { getData })(FriendsList)
)