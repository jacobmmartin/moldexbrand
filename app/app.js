import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';


import Home from './components/container/Home';
import About from './components/container/About';
import Product from './components/container/Product';


import AppHeader from './components/presentation/appHeader';
import Footer from './components/presentation/Footer';




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
        <Footer />
      </div>
    )
  }
}

export default App;


ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "product" component = {Product} />
      </Route>
   </Router>

), document.getElementById('app'))
