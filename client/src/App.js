import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Register from './components/Register'
import Profile from './components/Profile'
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Landing} />
        <div>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/profile' component={Profile} />
        </div>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
