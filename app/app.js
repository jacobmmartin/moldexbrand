import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';


import Home from 'Home';
import About from 'About';
import Products from 'Products';


class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>

        {this.props.children}
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
         <Route path = "products" component = {Products} />
      </Route>
   </Router>

), document.getElementById('app'))
