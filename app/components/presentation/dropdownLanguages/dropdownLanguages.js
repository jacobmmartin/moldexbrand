//js imports
import React from 'react';

//Load CSS and images
require("./dropdownLanguages.css");

//Cretate Class
var DropdownLanguages = React.createClass({
  render: function() {
    return (
        <ul className="dropdown-menu dropdown-languages">
            <li>
                <div className="yamm-content">
                    <div className="row">
                    <ul className="col-sm-12 col-md-12 list-unstyled ">
                        <li>
                            <p>Languages</p>
                        </li>
                        <li> <a href="https://www.moldexbrands.com/"><i className="fa fa-angle-right"></i> English </a> </li>
                        <li> <a href="https://www.moldexbrands.ca"><i className="fa fa-angle-right"></i> French </a> </li>
                    </ul>
                    </div>
                </div>
            </li>
        </ul>
    );
  }

});

export default DropdownLanguages;
