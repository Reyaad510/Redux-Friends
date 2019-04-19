import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <nav>
       <div className='nav-links'>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/friendslist'>FriendsList</NavLink>
      </div>
      </nav>
      <Route path='/login' component={Login} /> 
      <PrivateRoute exact path='/friendslist' component={FriendsList} />
      </div>
      </Router>
    );
  }
}

export default App;
