import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import HomeContainer from './containers/HomeContainer'
import SignupForm from './components/Signup/SignupForm';
import LoginForm from './components/Login/LoginForm'

function App() {
  return (
    <div className="App">
      {/*code here*/}
      <Router>
        <div>
          <Route path='/' component={HomeContainer}/>
          <Route path='/login' component={LoginForm} />
          <Route path='/signup' component={SignupForm} />
        </div>
      </Router>
    </div>
  );
}

export default App;
