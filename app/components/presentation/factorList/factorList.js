//js imports
import React from 'react';

import language from "../../../language.js";

let Factors = language.Factors;

//Load CSS and images
require("./factorList.css");


import Factor from '../factor/factor';

class FactorList extends React.Component {
  constructor() {
    super();
    this.state = {
      factorList:  Factors
    }
  }
  render() {
    return (
      <div>
        {
          this.state.factorList.map(function (factor){
            return <div  key={factor.title} className="one_third animate fadeInUp" data-anim-type="fadeInUp" data-anim-delay={factor.delay}>
                    <Factor  model={factor}/>
                  </div>

          })
        }
      </div>
    );
  }
};

FactorList.propTypes = {
  initialValue: React.PropTypes.string
};
FactorList.defaultProps = {
  initialValue: ''
};

export default FactorList;
