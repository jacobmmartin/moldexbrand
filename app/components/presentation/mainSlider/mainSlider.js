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
              <h1 className="ms-layer stext1" style={{top: 165 + 'px'}} data-type="text" data-duration="900" data-delay="800" data-ease="easeOutExpo" data-effect="bottom(40)">
                Professional Grade <strong>Mold & Mildew Solutions</strong>
              </h1>
              <h4 className="ms-layer stext2" style={{top: 228 + 'px'}} data-type="text" data-duration="900" data-delay="1500" data-ease="easeOutExpo" data-effect="bottom(40)">
                Mold cleaning for anywhere... inside and out. We offer it all.
              </h4>
              <div className="ms-layer" style={{left: 612 + 'px', top: 278 + 'px'}} data-type="text" data-delay="2500" data-ease="easeOutExpo" data-duration="900" data-effect="scale(1.5,1.6)">
                  <a href="products.html" className="sbutton5">View Products!</a>
              </div>
          </div>
          <div className="ms-slide slide-2" data-delay="8">
              <img data-src="/images/home_banner_instant_stain_remover.jpg" alt="" />
              <h1 className="ms-layer stext4" style={{left: 130 + 'px', top: 300 + 'px'}} data-type="text" data-duration="900" data-delay="400" data-ease="easeOutExpo" data-effect="bottom(40)">
                Introducing the<br/>
                <strong>Most Powerful<br/>
                <em> Mildew Stain Remover</em></strong>
              </h1>
              <h4 className="ms-layer stext5" style={{left: 130 + 'px', top: 480 + 'px'}} data-type="text" data-duration="900" data-delay="900" data-ease="easeOutExpo" data-effect="bottom(40)">
                3X Stronger. We arent messing around. Neither should you.
                </h4>
              <div className="ms-layer" style={{left: 130 + 'px', top: 550 + 'px'}} data-type="text" data-delay="2500" data-ease="easeOutExpo" data-duration="900" data-effect="scale(1.5,1.6)">
                  <a href="../instant-mold-mildew-stain-remover.html" className="sbutton1">Learn More!</a>
              </div>
          </div>
          <div className="ms-slide slide-3" data-delay="8">
              <img src="/images/home_banner_mold_killer.jpg" data-src="images/home_banner_mold_killer.jpg" alt="" />
              <img src="/images/home_banner_mold_killer_2.png" data-src="images/home_banner_mold_killer_2.png" alt="" style={{left:670 + 'px', top:70 + 'px'}} className="ms-layer" data-type="image" data-effect="right(300)" data-ease="easeOutExpo" data-duration="900" data-delay="300" />
              <h1 className="ms-layer stext6" style={{left: 130 + 'px', top: 265 + 'px'}} data-type="text" data-duration="900" data-delay="1800" data-ease="easeOutExpo" data-effect="bottom(40)">
                Moldex<span className="sup">&reg;</span><strong style={{color: '#FFE02D'}}> Mold Killer</strong><br/>
                <strong>When things<br/>
                get serious</strong>
              </h1>
              <h4 className="ms-layer stext7" style={{left: 130 + 'px', top: 470 + 'px'}} data-type="text" data-duration="900" data-delay="2500" data-ease="easeOutExpo" data-effect="bottom(40)">
                Trusted by Professional Mold Remediators for over a decade.
                </h4>
              <div className="ms-layer" style={{left: 130 + 'px', top: 550 + 'px'}} data-type="text" data-delay="3500" data-ease="easeOutExpo" data-duration="900" data-effect="scale(1.5,1.6)">
                  <a href="mold-mildew-killer.html" className="sbutton5">Learn More!</a>
              </div>
          </div>
          <div className="ms-slide slide-3" data-delay="8">
              <img src="/images/home_banner_deck_house.jpg" data-src="images/home_banner_deck_house.jpg" alt="" />
              <img src="/images/home_banner_deck_house.png" data-src="images/home_banner_deck_house.png" alt="" style={{left:100 + 'px', top:70 + 'px'}} className="ms-layer" data-type="image" data-effect="left(300)" data-ease="easeOutExpo" data-duration="900" data-delay="300" />
              <h1 className="ms-layer stext6" style={{left: 700 + 'px', top: 265 + 'px'}} data-type="text" data-duration="900" data-delay="1800" data-ease="easeOutExpo" data-effect="bottom(40)">
                <strong><em>The Dynamic Duo!</em></strong><br/>
                <strong>Who needs a Pressure Washer?</strong>
              </h1>
              <h4 className="ms-layer stext7" style={{left: 700 + 'px', top: 445 + 'px'}} data-type="text" data-duration="900" data-delay="2500" data-ease="easeOutExpo" data-effect="bottom(40)">
                Just hook these up to your garden hose, spray and clean!
              </h4>
              <h4 className="ms-layer stext7" style={{left: 700 + 'px', top: 470 + 'px'}} data-type="text" data-duration="900" data-delay="2500" data-ease="easeOutExpo" data-effect="bottom(40)">
                Yes, it is that easy.
              </h4>
              <div className="ms-layer" style={{left: 700 + 'px', top: 530 + 'px'}} data-type="text" data-delay="3500" data-ease="easeOutExpo" data-duration="900" data-effect="scale(1.5,1.6)">
                  <a href="instant-house-wash.html" className="sbutton5">Learn More!</a>
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
