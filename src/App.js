import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experiences from './components/Experiences';
import Featured from './components/Featured';
import Signup from './components/Signup';
import Login from './components/Login';
import Post from './components/Post';

export default class App extends Component {

  // componenWillMount()
  // Fetch for getAlls
  // When user logs in, always check with componentWillMount() in localStorage

  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/experiences" component={Experiences} />
          {/* <Route patch="/experiences/:name" component={Featured} /> */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/post" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}
