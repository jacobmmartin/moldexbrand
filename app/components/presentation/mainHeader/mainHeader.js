//js imports
import React from 'react';
import { Link } from 'react-router';

//Load CSS and images
require("./mainHeader.css");

import LogoHeader from '../logoHeader/logoHeader';
import NavBar from '../navbar/navbar';

//Cretate Class
var MainHeader = React.createClass({
  render: function() {
    return (
      <div id="trueHeader">
        <div className="wrapper">
          <LogoHeader />
          <NavBar />
        </div>
      </div>
    );
  }

});

export default MainHeader;
