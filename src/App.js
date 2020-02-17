import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
import './App.css';
import request from 'superagent';
import { 
  Route, 
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
import Home from './Home.js';
import Detail from './Detail.js';
import About from './About.js';


export default class App extends Component {

  render() {

    return (
      <Router>
          <div>
            <h1>Pokemon Search</h1>
            <Link to ="/">Home</Link>
            <br></br>
            <Link to ="/About">About</Link> <Route exact path="/About" component={About}/>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon/:pokeName" component={Detail} />
          </div>
      </Router>
    );
}}




