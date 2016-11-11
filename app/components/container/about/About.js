import React from 'react';
import PageTitle from "../../presentation/pageTitle/pageTitle"

require("./about.css");


const About = () =>{
    return(
        <div>
        <PageTitle  title="Moldex Brands"/>
        <div className="container">
            <div className="col-md-6">
                <h3>We grew <strong>tired of cleaning mold &amp; mildew</strong> only to watch it grow back.</h3>
                <p>It seemed to be a never-ending. WHY? What makes mold grow back? Why can't you get rid of it? Once we figured it out, we wanted to share it with the world. We set out to change the way people view mold &amp; mildew.
                    <br/>
                    <br/> In 1996, a group of scientists and entrepreneurs used private funds to research a problem that at first glance might not have seemed as important as global warming or finding a cure for cancer. But at a closer look, as studies showed, this was a serious health and economic problem.<strong><em> Dangerous Mold</em></strong>. Many people believe that scrubbing hard with bleach is enough for a mold and mildew remover. Many people are wrong. Bleach is little more than a cosmetic fix. As the twentieth century ended, many studies showed mold and mildew to be a major health hazard. The need for powerful mildew-removal and inhibiting products became increasingly clear.</p>
                <br/>
            </div>
            <div className="col-md-6"><img src="https://www.moldexbrands.com/images/moldex_about.jpg" alt="" className="img_size1"/></div>

            <div className="clearfix"></div>
            <div className="one_full">
                <p>After three years of successful R&amp;D came the <a href="https://www.envirocarecorp.com">EnviroCare Corporation</a>. Initially, the company targeted professional builders of new construction who needed anti-mold coatings for treating lumber and other materials likely to fall prey to toxic mold. After successfully launching a product line for new buildings, the question was asked, “What about existing buildings that have mold problems or are in need of mold remediation?” The answer was a second product called Moldex<span className="sup">®</span>. Moldex<span className="sup">®</span> was created for professionals and certified applicators for use in commercial and residential structures. Moldex<span className="sup">®</span> cleans, kills and disinfects to get rid of mold &amp; mildew before surfaces are coated with a mold-proof barrier.
                    <br/>
                    <br/> Now, with the exploding do-it-yourself market, EnviroCare is offering an extensive line of professional grade mold solutions called Moldex<span className="sup">®</span> Brands. The Moldex<span className="sup">®</span> Brand was designed specifically for the individual homeowner who wants to get rid of mold and keep the dangerous hazard from returning. It offers retailers a comprehensive, low-cost, easy to use, consumer-friendly line of professional strength products that utilize the same methods and technologies trusted by “the pros” for years.
                    <br/>
                </p>
            </div>

            <div className="clearfix"></div>

            <div className="clearfix divider_dashed6"></div>
            <div className="big_text1 center">
                Using the <i><a href="how-to-get-rid-of-mold-and-mildew.html">3 Factors in Mold Fighting</a></i> approach, the Moldex<span className="sup">®</span> Brand is empowering consumers and encouraging people to solve mold problems the right way. Don’t be fooled by “all-in-one” products and find out why millions of homeowners, DIY'ers, and professional mold &amp; mildew remediators trust the Moldex<span className="sup">®</span> Brand.
                <br/ >
                <br />
                <a href="products.html" role="button" className="readmore_but3">View All Our Products</a>
            </div>
        </div>
        <div className="clearfix margin_top7"></div>
        </div>
    )
}

export default About
