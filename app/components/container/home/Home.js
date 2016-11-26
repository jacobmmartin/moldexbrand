import React from 'react';

//Load CSS and images
require("./home.css");

import MainSlider from '../../../components/presentation/mainSlider/mainSlider';
import FactorList from '../../../components/presentation/factorList/factorList';
import Carousel from '../../../components/presentation/carousel/carousel';
import MoldInfo from '../../../components/presentation/moldInfo/moldInfo';
import FeaturedProducts from '../../../components/presentation/featuredProducts/featuredProducts';
import CarouselRetailers from '../../../components/presentation/carouselRetailers/carouselRetailers';

//dangerouslySetInnerHTML={{ __html: this.state.product.headline}} 009cb700

const Home = () =>{
    return(
        <div>
          <div className="container_full slidertop">
            <MainSlider />
          </div>
          <div className="fusection5">
            <div className="container">
              <h2 dangerouslySetInnerHTML={{ __html: __("52f1f10b")}}>
              </h2>
              <FactorList />
            </div>
          </div>
          <div className="green_section">
            <div className="container">
                <h2 className="white" dangerouslySetInnerHTML={{ __html: __("009cb700")}}>
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
              <h1 className="animate white" data-anim-type="fadeInDown" data-anim-delay="200" dangerouslySetInnerHTML={{ __html: __('65141b94')}} ></h1>
              <h4 className="animate white" data-anim-type="fadeInDown" data-anim-delay="250" dangerouslySetInnerHTML={{ __html: __('c238f387')}}></h4>
              <br/>
              <a href="mold_guide.html" className="readmore_but9 animate" data-anim-type="zoomIn" data-anim-delay="750" dangerouslySetInnerHTML={{ __html: __('0c359e2d')}}></a>
            </div>
          </div>
          <div className="clearfix margin_top3"></div>
          <div className="container_full">
            <div className="feature_section81">
              <div className="container">
                <FeaturedProducts />
              </div>
            </div>
            <div className="clients margin_top3">
              <div className="container">
                <CarouselRetailers />
              </div>
            </div>
          </div>
          <a href="#" className="scrollup">Scroll</a>
        </div>

    )
}

export default Home
