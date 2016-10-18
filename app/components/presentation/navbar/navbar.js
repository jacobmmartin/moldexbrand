//js imports
import React from 'react';
import { Link } from 'react-router';
import DropdownProduct from '../dropdownProduct/dropdownProduct';

//Load CSS and images
require("./navbar.css");
require('./assets/opacity1.png');

//Cretate Class
var NavBar = React.createClass({
  getInitialState: function(){
    return {
      selected:''
    }
  },
  setFilter: function(filter) {
    this.setState({selected  : filter})
  },
  isActive:function(value){
    return value === this.state.selected ? 'active' : '';
  },
  render: function() {
    return (
      <div className="menu_main">
          <div className="container">
              <div className="navbar yamm navbar-default">
                  <div className="container">
                      <div className="navbar-header">
                          <div className="navbar-toggle .navbar-collapse .pull-right " data-toggle="collapse" data-target="#navbar-collapse-1">
                              <span>Menu</span>
                              <button type="button"> <i className="fa fa-bars"></i></button>
                          </div>
                      </div>
                      <div id="navbar-collapse-1" className="navbar-collapse collapse">
                          <ul className="nav navbar-nav">
                              <li><Link to="/home"  className={this.isActive('home')} onClick={this.setFilter.bind(this, 'home')} >Home</Link></li>
                              <li><Link to="/about" className={this.isActive('about')} onClick={this.setFilter.bind(this, 'about')}>About</Link></li>
                              <li className="dropdown yamm-fw">
                                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"  className={this.isActive('product')} onClick={this.setFilter.bind(this, 'product')} >Products</a>
                                  <DropdownProduct />
                              </li>
                              <li><Link to="/factors" className={this.isActive('factors')} onClick={this.setFilter.bind(this, 'factors')} >3 Factors in Mold Fighting</Link></li>
                              <li><Link to="/mold_guide" className={this.isActive('guide')} onClick={this.setFilter.bind(this, 'guide')} >Mold &amp; Mildew Guide</Link></li>
                              <li><Link to="/retail" className={this.isActive('retail')} onClick={this.setFilter.bind(this, 'retail')} >Find our Products</Link></li>
                              <li><Link to="/blog" className={this.isActive('blog')} onClick={this.setFilter.bind(this, 'blog')} >News &amp; Blog</Link></li>
                              <li><Link to="/contact" className={this.isActive('contact')} onClick={this.setFilter.bind(this, 'contact')} >Contact</Link></li>
                          </ul>
                          <div id="wrap">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }

});

export default NavBar;

// <li className="dropdown yamm-fw"> <a onClick={this.onClickProducts}>Products</a>
//   { this.state.showDropdown ?  : null }
// </li>
