import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData } from '../actions';


class FriendsList extends React.Component {


    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <>
            <h1> I am friends </h1>
            <div>
                {this.props.friends.map(friend => friend.name)}
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