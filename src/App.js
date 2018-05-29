import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components
import Header from './components/Header';
import Home from './components/Home';
import ExperiencePage from './components/ExperiencePage';
import Featured from './components/Featured';
import Signup from './components/Signup';
import Login from './components/Login';
import Post from './components/Post';
import Profile from './components/Profile';

export default class App extends Component {

  // componenWillMount()
  // Fetch for getAlls
  // When user logs in, always check with componentWillMount() in localStorage

  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/experiences" component={ExperiencePage} />
          <Route exact path="/experiences/:id" component={Featured} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}
