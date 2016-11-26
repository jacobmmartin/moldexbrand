//js imports
import React from 'react';

//Load CSS and images
require("./moldInfo.css");

class MoldInfo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="one_half">
            <br/>
            <br/>
            <h2 dangerouslySetInnerHTML={{ __html: __("8ff2a774")}}></h2>
            <h6 className="grayc" dangerouslySetInnerHTML={{ __html: __("f158a79f")}}></h6>
            <p dangerouslySetInnerHTML={{ __html: __("22494ff5")}}></p>
            <br/>
            <br/>
            <a href="https://moldexbrands.com/blog/" className="readmore_but9" dangerouslySetInnerHTML={{ __html: __("5de18f23")}}></a>
        </div>
        <div className="one_half last">
            <img src="https://www.moldexbrands.com/images/killer_vs_stain_remover.png" alt="" className="img_right" />
        </div>
      </div>
    );
  }
};

MoldInfo.propTypes = {
  initialValue: React.PropTypes.string
};
MoldInfo.defaultProps = {
  initialValue: ''
};

export default MoldInfo;
