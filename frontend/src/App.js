import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import LandingContainer from './containers/LandingContainer'
import SignupForm from './components/Signup/SignupForm';
import LoginForm from './components/Login/LoginForm'

function App() {
  return (
    <div className="App">
      {/*code here*/}
      <Router>
        <div>
          <Route path='/' component={LandingContainer}/>
          <Route path='/login' component={LoginForm} />
          <Route path='/signup' component={SignupForm} />
        </div>
      </Router>
    </div>
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