import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import React, { Component } from 'react';
import Menu from './component/Menu';
import Home from './component/Home';
import Create from './component/Create';
import Edit from './component/Edit';
import Login from './component/Login';
import Signup from './component/Signup';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Menu/>
          <Switch>
            <Route exact path="/"  component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/create" component={Create}></Route>
            <Route exact path="/edit/:id" component={Edit}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>

                      
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;

