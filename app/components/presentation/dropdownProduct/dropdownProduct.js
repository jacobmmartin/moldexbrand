//js imports
import React from 'react';
import { Link } from 'react-router';
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
                      <aside className="col-sm-6 col-md-3 list-unstyled ">
                          <li>
                              <p>Our Products</p>
                          </li>
                          <li>
                            <img src='/images/3_factors.jpg' alt="" className="img_left4" ></img>
                            Our method is <strong>Kill, Clean</strong> and <strong>Prevent</strong>.
                            We call it the "3 Factors in Mold Fighting". Professional solutions made for you. Which one do you need?
                            <Link to="how-to-get-rid-of-mold-and-mildew.html"> Find out <i className="fa fa-long-arrow-right"></i></Link>
                          </li>
                      </aside>
                      <ul className="col-sm-6 col-md-3 list-unstyled ">
                          <li>
                              <p>Mold Killers</p>
                          </li>
                          <li><Link to="/product/mold-mildew-killer"><i className="fa fa-angle-right"></i> Moldex Mold Killer</Link></li>
                          <li><Link to="/product/disinfectant-conc"><i className="fa fa-angle-right"></i> Moldex Disinfectant Concentrate</Link></li>
                      </ul>
                      <ul className="col-sm-6 col-md-3 list-unstyled ">
                          <li>
                              <p>Stain Removers</p>
                          </li>
                          <li> <Link to="/product/instant-mold-mildew-stain-remover"><i className="fa fa-angle-right"></i> Moldex Instant Stain Remover</Link> </li>
                          <li> <Link to="/product/instant-house-wash"><i className="fa fa-angle-right"></i> Moldex Instant House Wash (H/E)</Link> </li>
                          <li> <Link to="/product/instant-deck-fence-wash"><i className="fa fa-angle-right"></i> Moldex Instant Deck Wash (H/E)</Link> </li>
                          <li> <Link to="/product/non-bleach-stain-remover"><i className="fa fa-angle-right"></i> Moldex Non-Bleach Stain Remover</Link> </li>
                          <li> <Link to="/product/paint-preparation"><i className="fa fa-angle-right"></i> Moldex Paint Prep</Link> </li>
                          <li> <Link to="/product/power-outdoor-cleaner"><i className="fa fa-angle-right"></i> Moldex Power Outdoor Cleaner</Link> </li>
                          <li> <Link to="/product/cleaning-mold-on-patio-furniture"><i className="fa fa-angle-right"></i> Moldex Patio Furniture Cleaner</Link> </li>
                      </ul>
                      <ul className="col-sm-6 col-md-3 list-unstyled ">
                          <li>
                              <p>Prevention</p>
                          </li>
                          <li><Link to="/product/sealant-mold-mildew-blocker"><i className="fa fa-angle-right"></i> Moldex Sealant</Link></li>
                      </ul>
                  </div>
              </div>
          </li>
      </ul>
    );
  }

});

export default DropdownProduct;
