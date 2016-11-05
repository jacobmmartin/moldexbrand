import React, {Component} from 'react';

class PageTitle extends Component {
    render() {
        return (
             <div className="page_title2">
                    <div className="container">
                        <div className="title">
                            <h1>{this.props.title}</h1>
                            <br/>
                        </div>
                    </div>
                </div>
        );
    }
}

export default PageTitle;