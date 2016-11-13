import React, {Component} from 'react';

class ProductHeader extends Component {
    render() {
        return (
            <div className="page_title">
                <div className="container">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        );
    }
}

export default ProductHeader;