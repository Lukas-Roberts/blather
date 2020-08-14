import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './css/App.css';
import LandingContainer from './containers/LandingContainer';
import SignupForm from './components/Signup/SignupForm';
import LoginForm from './components/Login/LoginForm';
import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <Router>
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

        </Switch>
      </div>
    </Router>
  );
}

export default App;


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