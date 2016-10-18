global.jQuery = require('jquery');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';


//IMPORT NODE MODULES TODO: CHANGE THIS
require('bootstrap');

//IMPORT GENERAL CSS
require("./styles/reset.css");
require("./styles/yamm.css");

//IMPORT custom components
import Home from './components/container/Home';
import About from './components/container/About';
import Product from './components/container/Product';

import MainHeader from './components/presentation/mainHeader/mainHeader';
import AppFooter from './components/presentation/appFooter/appFooter';


class App extends React.Component {
  render() {
    return (
      <div>
        <MainHeader />
        <div>
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
