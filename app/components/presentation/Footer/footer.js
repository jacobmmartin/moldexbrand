import React, {Component} from 'react';
require("./stylesheet.css")

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer1">
                    <div className="container">
                        <div className="col-md-3">
                            <ul className="faddress">
                                <li><img src="https://www.moldexbrands.com/images/footer-logo.png" alt=""/></li>
                                <li><i className="fa fa-map-marker fa-lg"></i> 866 Horan Drive
                                    <br/> Fenton, Missouri 63026</li>
                                <li><i className="fa fa-phone"></i>&nbsp; Toll Free: 1.800.325.6180</li>
                                <li><i className="fa fa-phone"></i>&nbsp; Phone: 1.636.349.5855</li>
                                <li><i className="fa fa-print"></i>&nbsp; Fax: 1.636.349.5335</li>
                                <li><a href="mailto:info@moldexbrands.com"><i className="fa fa-envelope"></i> info @moldexbrands.com</a></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <div className="qlinks">
                                <h4 className="lmb">Useful Links</h4>
                                <ul>
                                    <li><a href="mold_guide.html"><i className="fa fa-angle-right"></i> Mold &amp; Mildew Guide</a></li>
                                    <li><a href="https://www.moldexbrands.com/mold-mildew-killer.html"><em className="fa fa-angle-right"></em> Mold Killer</a></li>
                                    <li><a href="products.html"><i className="fa fa-angle-right"></i> Our Products</a></li>
                                    <li><a href="https://www.convenienceproducts.com/"><i className="fa fa-angle-right"></i> Convenience Products</a></li>
                                    <li><a href="blog/"><i className="fa fa-angle-right"></i> Recent Blogs or News</a></li>
                                    <li><a href="contact.html"><i className="fa fa-angle-right"></i> Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="siteinfo">
                                <h4 className="lmb">Our Story...</h4>
                                <p>We were tired of cleaning only to watch it grow back.It seemed to be a never-ending.Why?What makes mold grow back?Why can't you get rid of it? Once we figure it out, we wanted to share it with the world. We set out to change the way people view mold &amp; mildew...
                                    <a href="about-mold-and-mildew-remover.html">Read more <i className="fa fa-long-arrow-right"></i></a>
                                </p></div>
                        </div>
                    </div>
                </div>
                <div className="copyright_info four">
                    <div className="container">
                        <div className="one_half">
                            Copyright © 2015 Moldex Brands.All rights reserved.<a href="terms.html">Terms of Use</a> | <a href="privacy.html">Privacy Policy</a> | <a href="refund.html">Refund Policy</a>
                        </div>
                        <div className="one_half last">
                            <ul className="footer_social_links three">
                                <li className="animate zoomIn" data-anim-type="zoomIn" data-anim-delay="200"><a href="https://www.facebook.com/moldexbrands"><i className="fa fa-facebook"></i></a></li>
                                <li className="animate zoomIn" data-anim-type="zoomIn" data-anim-delay="300"><a href="http://www.instagram.com/moldexbrands"><i className="fa fa-instagram"></i></a></li>
                                <li className="animate zoomIn" data-anim-type="zoomIn" data-anim-delay="550"><a href="http://www.pinterest.com/moldexbrands"><i className="fa fa-pinterest"></i></a></li>
                                <li className="animate zoomIn" data-anim-type="zoomIn" data-anim-delay="550"><a href="http://www.twitter.com/moldexbrands"><i className="fa fa-twitter"></i></a></li>
                                <li className="animate zoomIn" data-anim-type="zoomIn" data-anim-delay="550"><a href="https://www.youtube.com/channel/UCOhsM9FUmFDxWbgpKMr3Daw"><i className="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;


