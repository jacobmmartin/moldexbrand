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
          <h3>Featured<strong> PRODUCTS:<br/></strong></h3>
          <div className="one_third animate" data-anim-type="fadeIn" data-anim-delay="200">
              <img src="images/patio_home_bottom.jpg" alt="" className="img_left1" />
              <h4>Moldex<span className="sup">&reg;</span> Patio Furniture Cleaner</h4>
              <p>Unique two-in-one formula gently cleans furniture and provides residual stain fighters on the surface. Whitens stains without abrasives, and will cleans furniture surfaces, fabrics, and upholstery without harming expensive plants or landscaping.</p>
              <br/>
              <a href="../cleaning-mold-on-patio-furniture.html" className="lfive"><i className="fa fa-chevron-circle-right"></i>&nbsp; Read More</a>
          </div>
          <div className="one_third animate" data-anim-type="fadeIn" data-anim-delay="300">
              <img src="images/paint_prep_home_bottom.jpg" alt="" className="img_left1" />
              <h4>Moldex<span className="sup">&reg;</span> Paint Prep</h4>
              <p>This TSP alternative cleaner is bleach-free and safer to use around children and pets. It removes dirt, grease, grime, smoke, mildew stains, food stains, heel marks, crayon, old wallpaper paste, and wax from painted or unpainted wood, metal, or vinyl wallpaper.</p>
              <br/>
              <a href="../paint-preparation.html" className="lfive"><i className="fa fa-chevron-circle-right"></i>&nbsp; Read More</a>
          </div>
          <div className="one_third last animate" data-anim-type="fadeIn" data-anim-delay="400">
              <img src="images/power_home_bottom.jpg" alt="" className="img_left1" />
              <h4>Moldex<span className="sup">&reg;</span> Power Cleaner</h4>
              <p>Commercial strength multi-surface outdoor cleaner designed to clean dirt, grime and remove mold, mildew, algae stains from almost any surface. Designed as a Power-washer concentrate formula, but makes 11 ready-to-use gallons of powerful cleaner!</p>
              <br/>
              <a href="../power-outdoor-cleaner.html" className="lfive"><i className="fa fa-chevron-circle-right"></i>&nbsp; Read More</a>
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
