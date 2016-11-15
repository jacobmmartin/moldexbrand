import React, {Component} from 'react';
import "./appFooter.css"

class appFooter extends Component {
    render() {
        return (
            <div>
                <div className="footer1">
                    <div className="container">
                        <div className="one_fourth">
                            <ul className="faddress">
                                <li><img src="https://www.moldexbrands.com/images/footer-logo.png" alt=""/></li>
                                <li><i className="fa fa-map-marker fa-lg"></i> 866 Horan Drive
                                    <br/> Fenton, Missouri 63026</li>
                                <li><i className="fa fa-phone"></i>&nbsp; Toll Free: 1.800.325.6180</li>
                                <li><i className="fa fa-phone"></i>&nbsp; Phone: 1.636.349.5855</li>
                                <li><i className="fa fa-print"></i>&nbsp; Fax: 1.636.349.5335</li>
                                <li><a href="mailto:info@moldexbrands.com"><i className="fa fa-envelope"></i> info @moldexbrands.com</a></li>
                            </ul>
                        </div>
                        <div className="one_fourth">
                            <div className="qlinks">
                                <h4 className="lmb">Useful Links</h4>
                                <ul>
                                    <li><a href="mold_guide.html" dangerouslySetInnerHTML={{ __html: __('146b4a94') }}></a></li>
                                    <li><a href="https://www.moldexbrands.com/mold-mildew-killer.html" dangerouslySetInnerHTML={{ __html: __('9ddffdb1') }}></a></li>
                                    <li><a href="products.html" dangerouslySetInnerHTML={{ __html: __('68bebeef')}}></a></li>
                                    <li><a href="https://www.convenienceproducts.com/" dangerouslySetInnerHTML={{ __html: __("6ec34033")}}></a></li>
                                    <li><a href="blog/" dangerouslySetInnerHTML={{ __html: __('5d93d5f7')}}></a></li>
                                    <li><a href="contact.html" dangerouslySetInnerHTML={{ __html: __('17ed278a')}}></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="one_half last">
                            <div className="siteinfo">
                                <h4 className="lmb">{__('39a1fddd')}</h4>
                                <p dangerouslySetInnerHTML={{ __html: __('04620d77') }}>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright_info four">
                    <div className="container">
                        <div className="one_half">
                            Copyright © 2015 Moldex Brands.All rights reserved.<a href="terms.html"> {__('985a4b72')} </a> | <a href="privacy.html"> {__('fa2ead69')} </a> | <a href="refund.html">{__('b3966088') }</a>
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

export default appFooter;
