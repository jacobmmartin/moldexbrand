import React from 'react';

//Load CSS and images
require("./home.css");

import FactorList from '../../../components/presentation/factorList/factorList';
import Carousel from '../../../components/presentation/carousel/carousel';


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
          <div class="green_section">
            <div class="container">
                <h2 class="white">
                  Our <strong>PRODUCTS</strong>
                </h2>
                <Carousel />
            </div>
          </div>
        </div>

    )
}

export default Home
