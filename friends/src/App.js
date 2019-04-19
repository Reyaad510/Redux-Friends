import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Link to='/login'>Login</Link>
      <Route path='/login' component={Login} /> 
      <FriendsList />
      </div>
      </Router>
    );
  }
}

export default App;
