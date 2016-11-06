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
            <h2>Mold Killer vs.<br/>Mold Stain Remover</h2>
            <h6 className="grayc">People ask us all the time... &quot;What is the difference between a <em>Mold Killer</em>and <em>Mold Stain Remover?</em> We aim to answer.</h6>
            <p>The goal of the clean-up process is to eliminate the mold and fungal growth and restore the surface to its original beauty. Killing the mold &amp; mildew growth with an EPA registered biocide is preferred. Biocides can be good cleaners, but are not the best stain removers. In contrast, stain removers lack the ability to effectively kill the living organisms that cause mold &amp; mildew. A combination of a biocide mold cleaner and a non-biocide mold remover is best.</p>
            <br/>
            <br/>
            <a href="https://moldexbrands.com/blog/" className="readmore_but9">Learn More.</a>
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
