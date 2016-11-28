import React from 'react';
import PageTitle from "../../presentation/pageTitle/pageTitle"

require("./about.css");


const About = () =>{
    return(
        <div>
        <PageTitle  title="Moldex Brands"/>
        <div className="container">
            <div className="col-md-6">
                <h3 dangerouslySetInnerHTML={{ __html: __("2e02ed0a")}}></h3>
                <p dangerouslySetInnerHTML={{ __html: __("6d107a2f")}}></p>
                <br/>
            </div>
            <div className="col-md-6"><img src="https://www.moldexbrands.com/images/moldex_about.jpg" alt="" className="img_size1"/></div>

            <div className="clearfix"></div>
            <div className="one_full">
                <p dangerouslySetInnerHTML={{ __html: __("e899ff17")}}></p>
            </div>

            <div className="clearfix"></div>

            <div className="clearfix divider_dashed6"></div>
            <div className="big_text1 center"  dangerouslySetInnerHTML={{ __html: __("3381b6bb")}} >

            </div>
        </div>
        <div className="clearfix margin_top7"></div>
        </div>
    )
}

export default About
