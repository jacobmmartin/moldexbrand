//js imports
import React from 'react';

//Load CSS and images
require("./dropdownProduct.css");

//Cretate Class
var DropdownProduct = React.createClass({
  render: function() {
    return (
      <ul className="dropdown-menu">
          <li>
              <div className="yamm-content">
                  <div className="row">
                      <ul className="col-sm-6 col-md-3 list-unstyled ">
                          <li>
                              <p>Our Products</p>
                          </li>
                          <li>
                            <img src={require('./assets/3_factors.jpg')} alt="" className="img_left4" ></img>
                            Our method is <strong>Kill, Clean</strong> and <strong>Prevent</strong>.
                            We call it the "3 Factors in Mold Fighting". Professional solutions made for you. Which one do you need?
                            <a href="how-to-get-rid-of-mold-and-mildew.html"> Find out <i className="fa fa-long-arrow-right"></i></a>
                          </li>
                      </ul>
                      <ul className="col-sm-6 col-md-3 list-unstyled ">
                          <li>
                              <p>Mold Killers</p>
                          </li>
                          <li><a href="#/product/mold-mildew-killer"><i className="fa fa-angle-right"></i> Moldex Mold Killer</a></li>
                          <li><a href="#/product/disinfectant-conc"><i className="fa fa-angle-right"></i> Moldex Disinfectant Concentrate</a></li>
                      </ul>
                      <ul className="col-sm-6 col-md-3 list-unstyled ">
                          <li>
                              <p>Stain Removers</p>
                          </li>
                          <li> <a href="#/product/instant-mold-mildew-stain-remover"><i className="fa fa-angle-right"></i> Moldex Instant Stain Remover</a> </li>
                          <li> <a href="#/product/instant-house-wash"><i className="fa fa-angle-right"></i> Moldex Instant House Wash (H/E)</a> </li>
                          <li> <a href="#/product/instant-deck-fence-wash"><i className="fa fa-angle-right"></i> Moldex Instant Deck Wash (H/E)</a> </li>
                          <li> <a href="#/product/non-bleach-stain-remover"><i className="fa fa-angle-right"></i> Moldex Non-Bleach Stain Remover</a> </li>
                          <li> <a href="#/product/paint-preparation"><i className="fa fa-angle-right"></i> Moldex Paint Prep</a> </li>
                          <li> <a href="#/product/power-outdoor-cleaner"><i className="fa fa-angle-right"></i> Moldex Power Outdoor Cleaner</a> </li>
                          <li> <a href="#/product/cleaning-mold-on-patio-furniture"><i className="fa fa-angle-right"></i> Moldex Patio Furniture Cleaner</a> </li>
                      </ul>
                      <ul className="col-sm-6 col-md-3 list-unstyled ">
                          <li>
                              <p>Prevention</p>
                          </li>
                          <li><a href="#/product/sealant-mold-mildew-blocker"><i className="fa fa-angle-right"></i> Moldex Sealant</a></li>
                      </ul>
                  </div>
              </div>
          </li>
      </ul>
    );
  }

});

export default DropdownProduct;
