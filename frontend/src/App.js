import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignupForm from '../src/components/Signup/SignupForm'

function App() {
  return (
    <div className="App">
      {/*code here*/}
      <footer className="App-footer">
        <p className="footer-p">
          Made With React
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
