import React from 'react';

//Load CSS and images
require("./home.css");
//require("../../../images/fullbg_mold_dish.jpg");

import FactorList from '../../../components/presentation/factorList/factorList';
import Carousel from '../../../components/presentation/carousel/carousel';
import MoldInfo from '../../../components/presentation/moldInfo/moldInfo';
import FeaturedProducts from '../../../components/presentation/featuredProducts/featuredProducts';


const Home = () =>{
    return(
        <div>
          <h2>
              Home page
          </h2>
          <div className="fusection5">
            <div className="container">
              <h2>
                  3 Factors in <strong>MOLD FIGHTING</strong>
                  <b>Products we offer. Solutions made easy. Which one is for you? Find out.</b>
              </h2>
              <FactorList />
            </div>
          </div>
          <div className="green_section">
            <div className="container">
                <h2 className="white">
                  Our <strong>PRODUCTS</strong>
                </h2>
                <Carousel />
            </div>
          </div>
          <div className="features_sec44">
            <div className="container">
              <MoldInfo />
            </div>
          </div>
          <div className="fusection9">
            <div className="container">
              <h1 className="animate white" data-anim-type="fadeInDown" data-anim-delay="200">BEYOND THE BOTTLE</h1>
              <h4 className="animate white" data-anim-type="fadeInDown" data-anim-delay="250"><i>What do I need to know about mold? We answer some of your questions.</i></h4>
              <br/>
              <a href="mold_guide.html" className="readmore_but9 animate" data-anim-type="zoomIn" data-anim-delay="750">Learn More</a>
            </div>
          </div>
          <div className="clearfix margin_top3"></div>
          <div className="container_full">
            <div className="feature_section81">
              <div className="container">
                <FeaturedProducts />
              </div>
            </div>
          </div>
        </div>

    )
}

export default Home
