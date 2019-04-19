import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class FriendsList extends React.Component {


    componentDidMount() {

    }

    render() {
        return (
            <h1> I am friends </h1>
        )
    }

}

export default withRouter(
    connect(null, {})(FriendsList)
)