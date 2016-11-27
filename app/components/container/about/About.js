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
                <p dangerouslySetInnerHTML={{ __html: __("bbba2927")}}></p>
                <br/>
            </div>
            <div className="col-md-6"><img src="https://www.moldexbrands.com/images/moldex_about.jpg" alt="" className="img_size1"/></div>

            <div className="clearfix"></div>
            <div className="one_full">
                <p dangerouslySetInnerHTML={{ __html: __("b2cd5312")}}></p>
            </div>

            <div className="clearfix"></div>

            <div className="clearfix divider_dashed6"></div>
            <div className="big_text1 center">
                Using the <i><a href="how-to-get-rid-of-mold-and-mildew.html">3 Factors in Mold Fighting</a></i> approach, the Moldex<span className="sup">®</span> Brand is empowering consumers and encouraging people to solve mold problems the right way. Don’t be fooled by “all-in-one” products and find out why millions of homeowners, DIY'ers, and professional mold &amp; mildew remediators trust the Moldex<span className="sup">®</span> Brand.
                <br/ >
                <br />
                <a href="products.html" role="button" className="readmore_but3" dangerouslySetInnerHTML={{ __html: __("2e537ffb")}}></a>
            </div>
        </div>
        <div className="clearfix margin_top7"></div>
        </div>
    )
}

export default About
