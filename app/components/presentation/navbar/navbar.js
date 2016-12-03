//js imports
import React from 'react';
import { Link } from 'react-router';
import DropdownProduct from '../dropdownProduct/dropdownProduct';
import DropdownLanguages from '../dropdownLanguages/dropdownLanguages';

//Load CSS and images
require("./navbar.css");

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
                              <li><Link to="/home"  className={this.isActive('home')} onClick={this.setFilter.bind(this, 'home')} > {__('710533dd')} </Link></li>
                              <li><Link to="/about" className={this.isActive('about')} onClick={this.setFilter.bind(this, 'about')}> {__('33080c3d')} </Link></li>
                              <li className="dropdown yamm-fw">
                                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"  className={this.isActive('product')} onClick={this.setFilter.bind(this, 'product')} > {__('d71bd8a0')}</a>
                                  <DropdownProduct />
                              </li>
                              <li><Link to="/factors" className={this.isActive('factors')} onClick={this.setFilter.bind(this, 'factors')} > {__('a661ee61')}</Link></li>
                              <li><Link to="/mold_guide" className={this.isActive('guide')} onClick={this.setFilter.bind(this, 'guide')} > {__('fcbb7eb5')}</Link></li>
                              <li><Link to="/retail" className={this.isActive('retail')} onClick={this.setFilter.bind(this, 'retail')} > {__('53dd823d')}</Link></li>
                              <li><Link to="/blog" className={this.isActive('blog')} onClick={this.setFilter.bind(this, 'blog')} > {__('709626b0')}</Link></li>
                              <li><Link to="/contact" className={this.isActive('contact')} onClick={this.setFilter.bind(this, 'contact')} > {__('c0241eae')}</Link></li>
                              <li className="dropdown yamm-fw">
                                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"  className={this.isActive('language')} onClick={this.setFilter.bind(this, 'language')} >Languages</a>
                                  <DropdownLanguages />
                              </li>
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
