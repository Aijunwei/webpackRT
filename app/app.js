import React from 'react'
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/home';
import Bundle from  './components/bundle';
import  './components/china.css';
//import loadAbout from 'bundle-loader?lazy&name=app-[name]!./components/about';
import loadTopics from 'bundle-loader?lazy&name=app-[name]!./components/topics';
const loadAbout = require('bundle-loader?lazy&name=app-[name]!./components/about');
const About = () => (
    <Bundle load = {loadAbout}>
        {(About) => <About/>}
    </Bundle>
);
const Topics = () => (
    <Bundle load = {loadTopics}>
        {(Topics) => <Topics/>}
    </Bundle>
);

export default class App extends React.Component{
    componentDidMount() {
       // 预加载
    //    loadAbout(() => {})
    //    loadTopics(() => {})
   }
    render() {
    return (
          <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
              </ul>

              <hr/>

              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/topics" component={Topics}/>
            </div>
          </Router>
    )
  }
}
