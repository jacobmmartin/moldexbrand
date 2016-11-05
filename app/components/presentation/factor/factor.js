//js imports
import React from 'react';
import { Link } from 'react-router';


//Load CSS and images
require("./factor.css");

//Cretate Class
class Factor extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <img src={this.props.model.img}  />
        <h4><strong>{this.props.model.title}</strong></h4>
        <p>{this.props.model.info}</p>
        <br></br>
        <br></br>
        <Link to={this.props.model.link} className="readmore_button">See Products</Link>
      </div>
    );
  }
};

Factor.propTypes = {
  initialValue: React.PropTypes.string
};
Factor.defaultProps = {
  initialValue: ''
};

export default Factor;
