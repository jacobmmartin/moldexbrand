global.jQuery = require('jquery');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';


//IMPORT NODE MODULES TODO: CHANGE THIS
require('bootstrap');

//IMPORT FOR ANIMATIONS JS
require("./js/animations/js/animations.js"); // TODO: FIX THIS IMPORT
require("./js/animations/css/animations.css");

//IMPORT FOR MASTERSLIDER JS
require("./js/masterslider/jquery.easing.min.js");
require("./js/masterslider/masterslider.min.js");
require("./js/masterslider/style/masterslider.css");
require("./js/masterslider/skins/default/style.css");
require("./js/masterslider/style.css");
require("./js/masterslider/style/ms-staff-style.css");

//IMPORT FOR JCAROUSEL
require("./js/carousel/jquery.jcarousel.min.js");
require("./js/carousel/jquery.flexslider.js");
require("./js/carousel/custom.js");
require("./js/carousel/flexslider.css");
require("./js/carousel/skin.css");

//IMPORT FOR FORM
require("./js/form/jquery.form.min.js")
require("./js/form/jquery.validate.min.js")

//IMPORT FOR MAINMENU
require("./js/mainmenu/stickytwo.css")

//IMPORT GENERAL CSS
require("./styles/reset.css");
require("./styles/yamm.css");

//IMPORT custom components
import Home from './components/container/home/Home';
import About from './components/container/About';
import MoldGuide from './components/container/moldGuide/MoldGuide';
import Product from './components/container/Product';
import Contact from './components/container/contact/Contact';
import Factors from './components/container/factors/Factors';
import Retail from './components/container/retail/Retail';


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
         <Route path = "mold_guide" component = {MoldGuide} />
         <Route path = "contact" component = {Contact} />
         <Route path = "factors" component = {Factors} />
         <Route path = "retail" component = {Retail} />
      </Route>
   </Router>

), document.getElementById('app'))
