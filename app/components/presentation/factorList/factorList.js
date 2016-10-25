//js imports
import React from 'react';

//Load CSS and images
require("./factorList.css");


import Factor from '../factor/factor';

class FactorList extends React.Component {
  constructor() {
    super();
    this.state = {
      factorList: [{  title: "Mold Killers",
                      img: "https://www.moldexbrands.com/images/home_page_killer_box.jpg",
                      info: "Broad spectrum disinfectant cleaners designed to destroy and neutralize mold, mildew, bacteria, fungus and odors at their source.",
                      linkg: "/killers",
                      delay: '200'
                    },
                    { title: "Stain Removers",
                      img: "https://www.moldexbrands.com/images/home_page_stain_box.jpg",
                      info: "Powerful cleaners for the removal of deeply seated mold and mildew stains. Available in bleach and non-bleach.",
                      linkg: "/stain_removers",
                      delay: '350'
                    },
                    { title: "Prevention",
                      img: "https://www.moldexbrands.com/images/home_page_seal_box.jpg",
                      info: "Provide long-lasting protection by creating a barrier between the surface and the bacteria, mold & mildew growth.",
                      linkg: "/prevention",
                      delay: '500'
                    }
                  ]
    }
  }
  render() {
    return (
      <div>
        {
          this.state.factorList.map(function (factor){
            return <div className="one_third animate fadeInUp" data-anim-type="fadeInUp" data-anim-delay={factor.delay}>
                    <Factor model={factor}/>
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
