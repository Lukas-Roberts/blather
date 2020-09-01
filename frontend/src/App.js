import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import './css/App.css';
import LandingContainer from './containers/LandingContainer';
import SignupForm from './components/Signup/SignupForm';
import LoginForm from './components/Login/LoginForm';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar'
import ProfileContainer from './containers/ProfileContainer';
import Explore from './components/Explore';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class App extends Component {
  render() {

  
    return (
      <Router>
        <NavBar/>
        <div className="App">
          <Switch>
            <Route exact path='/'>
              <LandingContainer />
            </Route>

            <Route path='/login'>
              <LoginForm />
            </Route>

            <Route path='/signup'>
              <SignupForm />
            </Route>

            <Route path='/home'>
              <HomeContainer />
            </Route>

            <Route path='/profile'>
              <ProfileContainer user={this.props.user}/>
            </Route>

            <Route exact path='/explore'>
              <Explore />
            </Route>

            <Route path='/explore/user/:id'>
              {this.props.selectedUser ? <ProfileContainer user={this.props.selectedUser}/> : <Redirect to='/explore' />}
            </Route>

            <Route path='/bleat/:id'>
              {this.props.selectedBleat ? <SignupForm bleat={this.props.selectedBleat}/> : <Redirect to='/explore' />}
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }  
}

const mapStateToProps = state => {
  return {
    user: state.user,
    selectedUser: state.selectedUser,
    selectedBleat: state.selectedBleat
  }
}

export default connect(mapStateToProps)(App);


/*
-----  REQUIREMENTS  -----
There should be 2 container components
There should be 5 stateless components
There should be 3 routes
Application must make use of react-router and proper RESTful routing
Use Redux middleware to respond to and modify state change
Make use of async actions and redux-thunk middleware
Your client-side application should handle the display of data with minimal data manipulation
*/