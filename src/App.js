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

export default class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/experiences" component={Experiences} />
          <Route patch="/experiences/:name" component={Featured} />
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}
