import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'
import "./styles.scss";
import axios from "axios";
import axiosWithAuth from "./helpers/axiosWithAuth";

function App() {

  const handleClick = (e) => { //api call to remove token when log out is clicked
    e.preventDefault()
    axiosWithAuth()
      .post('http://localhost:5000/api/logout')
      .then(res=> {
        localStorage.removeItem("token")
        window.location.href = 'http://localhost:3000/api/login'
      })
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          {/*Nav bar*/}
          <a data-testid="logoutButton" href="#" onClick={handleClick}>logout</a>

          <a><Link to='/login'>Login</Link></a>

          <a>
            {localStorage.getItem('token') && <div><Link to='protected'>Bubble Page</Link></div>} {/*nav only appears when logged in */}
          </a>

        </header>
      </div>

      <Switch>
        <PrivateRoute path='/bubbles' component={BubblePage}/>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;




//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.