//js imports
import React from 'react';

//Load CSS and images
require("./mainSlider.css");

class MainSlider extends React.Component {
  constructor() {
    super();
  }
  componentDidMount(){
    var slider = new MasterSlider();
    slider.setup('masterslider', {
        width: 1400, // slider standard width
        height: 720, // slider standard height
        space: 0,
        speed: 45,
        fullwidth: true,
        loop: true,
        preload: 0,
        autoplay: true,
        view: "basic"
    });
    // adds Arrows navigation control to the slider.
    slider.control('arrows');
    slider.control('bullets');
  }
  render() {
    return (
      <div className="master-slider ms-skin-default" id="masterslider">
          <div className="ms-slide slide-1" data-delay="8">
              <img src="images/home_banner_1.jpg" data-src="images/home_banner_1.jpg" alt="" />
              <h1 className="ms-layer stext1" style={{top: 165 + 'px'}} data-type="text" data-duration="900" data-delay="800" data-ease="easeOutExpo" data-effect="bottom(40)" dangerouslySetInnerHTML={{ __html: __("526c6899")}}>
              </h1>
              <h4 className="ms-layer stext2" style={{top: 228 + 'px'}} data-type="text" data-duration="900" data-delay="1500" data-ease="easeOutExpo" data-effect="bottom(40)" dangerouslySetInnerHTML={{ __html: __("383506cb")}}>
              </h4>
              <div className="ms-layer" style={{left: 612 + 'px', top: 278 + 'px'}} data-type="text" data-delay="2500" data-ease="easeOutExpo" data-duration="900" data-effect="scale(1.5,1.6)">
                  <a href="products.html" className="sbutton5" dangerouslySetInnerHTML={{ __html: __("be17e8bf")}}></a>
              </div>
          </div>
          <div className="ms-slide slide-2" data-delay="8">
              <img data-src="/images/home_banner_instant_stain_remover.jpg" alt="" />
              <h1 className="ms-layer stext4" style={{left: 130 + 'px', top: 300 + 'px'}} data-type="text" data-duration="900" data-delay="400" data-ease="easeOutExpo" data-effect="bottom(40)" dangerouslySetInnerHTML={{ __html: __("2da0434c")}}>
              </h1>
              <h4 className="ms-layer stext5" style={{left: 130 + 'px', top: 480 + 'px'}} data-type="text" data-duration="900" data-delay="900" data-ease="easeOutExpo" data-effect="bottom(40)" dangerouslySetInnerHTML={{ __html: __("16985ced")}}>
              </h4>
              <div className="ms-layer" style={{left: 130 + 'px', top: 550 + 'px'}} data-type="text" data-delay="2500" data-ease="easeOutExpo" data-duration="900" data-effect="scale(1.5,1.6)">
                  <a href="../instant-mold-mildew-stain-remover.html" className="sbutton1" dangerouslySetInnerHTML={{ __html: __("03703c88")}}></a>
              </div>
          </div>
          <div className="ms-slide slide-3" data-delay="8">
              <img src="/images/home_banner_mold_killer.jpg" data-src="images/home_banner_mold_killer.jpg" alt="" />
              <img src="/images/home_banner_mold_killer_2.png" data-src="images/home_banner_mold_killer_2.png" alt="" style={{left:670 + 'px', top:70 + 'px'}} className="ms-layer" data-type="image" data-effect="right(300)" data-ease="easeOutExpo" data-duration="900" data-delay="300" />
              <h1 className="ms-layer stext6" style={{left: 130 + 'px', top: 265 + 'px'}} data-type="text" data-duration="900" data-delay="1800" data-ease="easeOutExpo" data-effect="bottom(40)" dangerouslySetInnerHTML={{ __html: __("250f16a9")}}>
              </h1>
              <h4 className="ms-layer stext7" style={{left: 130 + 'px', top: 470 + 'px'}} data-type="text" data-duration="900" data-delay="2500" data-ease="easeOutExpo" data-effect="bottom(40)" dangerouslySetInnerHTML={{ __html: __("79f8135b")}}>
              </h4>
              <div className="ms-layer" style={{left: 130 + 'px', top: 550 + 'px'}} data-type="text" data-delay="3500" data-ease="easeOutExpo" data-duration="900" data-effect="scale(1.5,1.6)">
                  <a href="mold-mildew-killer.html" className="sbutton5" dangerouslySetInnerHTML={{ __html: __("03703c88")}}></a>
              </div>
          </div>
          <div className="ms-slide slide-3" data-delay="8">
              <img src="/images/home_banner_deck_house.jpg" data-src="images/home_banner_deck_house.jpg" alt="" />
              <img src="/images/home_banner_deck_house.png" data-src="images/home_banner_deck_house.png" alt="" style={{left:100 + 'px', top:70 + 'px'}} className="ms-layer" data-type="image" data-effect="left(300)" data-ease="easeOutExpo" data-duration="900" data-delay="300" />
              <h1 className="ms-layer stext6" style={{left: 700 + 'px', top: 265 + 'px'}} data-type="text" data-duration="900" data-delay="1800" data-ease="easeOutExpo" data-effect="bottom(40)" dangerouslySetInnerHTML={{ __html: __("40fc1cac")}}>
              </h1>
              <h4 className="ms-layer stext7" style={{left: 700 + 'px', top: 445 + 'px'}} data-type="text" data-duration="900" data-delay="2500" data-ease="easeOutExpo" data-effect="bottom(40)" dangerouslySetInnerHTML={{ __html: __("4efe7aa8")}}>
              </h4>
              <h4 className="ms-layer stext7" style={{left: 700 + 'px', top: 470 + 'px'}} data-type="text" data-duration="900" data-delay="2500" data-ease="easeOutExpo" data-effect="bottom(40)" dangerouslySetInnerHTML={{ __html: __("10d76914")}}>
              </h4>
              <div className="ms-layer" style={{left: 700 + 'px', top: 530 + 'px'}} data-type="text" data-delay="3500" data-ease="easeOutExpo" data-duration="900" data-effect="scale(1.5,1.6)">
                  <a href="instant-house-wash.html" className="sbutton5" dangerouslySetInnerHTML={{ __html: __("03703c88")}}></a>
              </div>
          </div>
      </div>
    );
  }
};

MainSlider.propTypes = {
  initialValue: React.PropTypes.string
};
MainSlider.defaultProps = {
  initialValue: ''
};

export default MainSlider;
