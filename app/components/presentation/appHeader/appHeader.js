import React from 'react';
import { Link } from 'react-router';

// require("./appHeader.css");

//import Background from './assets/opacity2.png';
var myImage = require('file?name=public/images/opacity2.png!./assets/opacity2.png');




var PropTypes = React.PropTypes;
var logoarea = {
    backgroundImage: "url(" + myImage + ")",
    float: 'left',
    width: '100%',
    height: '84px',
}


var AppHeader = React.createClass({

  render: function() {
    return (
      <div style={logoarea}>
        <div className="container">
            <div className="logo">
                <Link to="/" id="logo" >Home</Link>
            </div>
            <div className="right_links">
                <ul>
                    <li className="link"><a href="mailto:info@moldexbrands.com"><i className="fa fa-envelope"></i>info@moldexbrands.com</a></li>
                    <li className="social" data-anim-type="zoomIn" data-anim-delay="200"><a href="https://www.facebook.com/moldexbrands"><i className="fa fa-facebook"></i></a></li>
                    <li className="social" data-anim-type="zoomIn" data-anim-delay="300"><a href="http://www.instagram.com/moldexbrands"><i className="fa fa-instagram"></i></a></li>
                    <li className="social" data-anim-type="zoomIn" data-anim-delay="550"><a href="http://www.pinterest.com/moldexbrands"><i className="fa fa-pinterest"></i></a></li>
                    <li className="social" data-anim-type="zoomIn" data-anim-delay="550"><a href="http://www.twitter.com/moldexbrands"><i className="fa fa-twitter"></i></a></li>
                    <li className="social" data-anim-type="zoomIn" data-anim-delay="550"><a href="https://www.youtube.com/channel/UCOhsM9FUmFDxWbgpKMr3Daw"><i className="fa fa-youtube"></i></a></li>
                </ul>
            </div>
        </div>
      </div>
    );
  }

});

export default AppHeader;
