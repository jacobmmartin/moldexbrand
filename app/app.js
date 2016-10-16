import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';


require("./styles/reset.css");

import Home from './components/container/Home';
import About from './components/container/About';
import Product from './components/container/Product';

import AppHeader from './components/presentation/appHeader/appHeader';
import AppFooter from './components/presentation/appFooter/appFooter';


class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/product">Product</Link></li>
          </ul>

          {this.props.children}
        </div>
        <AppFooter />
      </div>
    )
  }
}

export default App;


ReactDOM.render((
   <Router history = {hashHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "product" component = {Product} />
      </Route>
   </Router>

), document.getElementById('app'))
