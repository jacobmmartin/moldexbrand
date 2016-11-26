//js imports
import React from 'react';

//Load CSS and images
require("./carouselRetailers.css");

class CarouselRetailers extends React.Component {
  constructor() {
    super();
  }
  componentDidMount(){
    jQuery(document).ready(function() {
        jQuery('#mycarouselthree').jcarousel();
    });
  }
  render() {
    return (
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: __("140676b4")}}></h3>
        <br/>
        <ul id="mycarouselthree" className="jcarousel-skin-tango">
            <li><img src="./images/retailers/ace_hwardware.png" alt="Ace Hardware" /></li>
            <li><img src="./images/retailers/true_value.png" alt="True Value" /></li>
            <li><img src="./images/retailers/home_depot.png" alt="Home Depot" /></li>
            <li><img src="./images/retailers/hd_supply.png" alt="HD Supply" /></li>
            <li><img src="./images/retailers/do_it_best.png" alt="Do It Best" /></li>
            <li><img src="./images/retailers/canadian_tire.png" alt="Canadian Tire" /></li>
        </ul>
      </div>
    );
  }
};

CarouselRetailers.propTypes = {
  initialValue: React.PropTypes.string
};
CarouselRetailers.defaultProps = {
  initialValue: ''
};

export default CarouselRetailers;
