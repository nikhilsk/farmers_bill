import React from 'react';
import './App.css';
import Login from './components/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';

const App = ()=>{

  return(
    <Router>
      <nav>
        <div className="comp-1">
        <h1 className="title-main">Faryeer</h1>
        <ul className="nav-links">
          <li className="nav-link">Features</li>
          <li className="nav-link">Why Us</li>
          <li className="nav-link">Pricing</li>
        </ul>
        </div>
        <div className="auth">
          <h3 className='login'>Login</h3>
          <h3 className='signup'>Signup</h3>
        </div>
      </nav>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
