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
    return {showDropdown: false}
  },
  onClickProducts: function(){
    console.log('click: ', this.state);
    if(this.state.showDropdown)
      this.setState({showDropdown: false})
    else
      this.setState({showDropdown: true})
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
                              <li><Link to="/home">Home</Link></li>
                              <li><Link to="/about">About</Link></li>
                              <li className="dropdown yamm-fw"> <a onClick={this.onClickProducts}>Products</a>
                                { this.state.showDropdown ? <DropdownProduct /> : null }
                              </li>
                              <li><Link to="/factors">3 Factors in Mold Fighting</Link></li>
                              <li><Link to="/mold_guide">Mold &amp; Mildew Guide</Link></li>
                              <li><Link to="/retail">Find our Products</Link></li>
                              <li><Link to="/blog">News &amp; Blog</Link></li>
                              <li><Link to="/contact">Contact</Link></li>
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
