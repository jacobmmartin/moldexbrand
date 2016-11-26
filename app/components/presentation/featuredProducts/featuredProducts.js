//js imports
import React from 'react';

//Load CSS and images
require("./featuredProducts.css");

class FeaturedProducts extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: __("ff6fcc08")}}></h3>
          <div className="one_third animate" data-anim-type="fadeIn" data-anim-delay="200">
              <img src="images/patio_home_bottom.jpg" alt="" className="img_left1" />
              <h4 dangerouslySetInnerHTML={{ __html: __("f3ee310b")}}></h4>
              <p dangerouslySetInnerHTML={{ __html: __("6738963b")}}></p>
              <br/>
              <a href="../cleaning-mold-on-patio-furniture.html" className="lfive" dangerouslySetInnerHTML={{ __html: __("00409997")}}></a>
          </div>
          <div className="one_third animate" data-anim-type="fadeIn" data-anim-delay="300">
              <img src="images/paint_prep_home_bottom.jpg" alt="" className="img_left1" />
              <h4 dangerouslySetInnerHTML={{ __html: __("34cc7a35")}}></h4>
              <p dangerouslySetInnerHTML={{ __html: __("883e4e19")}}></p>
              <br/>
              <a href="../paint-preparation.html" className="lfive" dangerouslySetInnerHTML={{ __html: __("00409997")}}></a>
          </div>
          <div className="one_third last animate" data-anim-type="fadeIn" data-anim-delay="400">
              <img src="images/power_home_bottom.jpg" alt="" className="img_left1" />
              <h4 dangerouslySetInnerHTML={{ __html: __("2239f764")}}></h4>
              <p dangerouslySetInnerHTML={{ __html: __("f94025c3")}}></p>
              <br/>
              <a href="../power-outdoor-cleaner.html" className="lfive" dangerouslySetInnerHTML={{ __html: __("00409997")}}></a>
          </div>
        </div>
    );
  }
};

FeaturedProducts.propTypes = {
  initialValue: React.PropTypes.string
};
FeaturedProducts.defaultProps = {
  initialValue: ''
};

export default FeaturedProducts;
