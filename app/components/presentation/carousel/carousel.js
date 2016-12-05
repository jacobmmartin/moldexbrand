//js imports
import React from 'react';

//Load CSS and images
require("./carousel.css");

class Carousel extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        var slider5 = new MasterSlider();
        slider5.setup('productSlider', {
            loop: true,
            width: 240,
            height: 240,
            speed: 20,
            view: 'focus',
            preload: 0,
            space: 35,
            viewOptions: {
                centerSpace: 1.6
            }
        });
        slider5.control('arrows');
        slider5.control('slideinfo', {
            insertTo: '#staff-info'
        });
    }
    render() {
        return (
            <div>
                <div className="ms-staff-carousel ms-round">
                    <div className="master-slider" id="productSlider">
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/32oz_instant_stain_remover_circle.jpg" data-src="images/products_images/32oz_instant_stain_remover_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>{__('77d15d59') }</h4>
                                <p dangerouslySetInnerHTML={{ __html: __('0114a1b5')}}></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/64oz_house_wash_circle.jpg" data-src="images/products_images/64oz_house_wash_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>{__('89c5daac')}</h4>
                                <p dangerouslySetInnerHTML={{ __html: __('bf60b074')}}></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/64oz_deck_wash_circle.jpg" data-src="images/products_images/64oz_deck_wash_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>{__('584ba142')}</h4>
                                <p dangerouslySetInnerHTML={{ __html: __('e239e852')}}></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/32oz_deep_stain_remover_circle.jpg" data-src="images/products_images/32oz_deep_stain_remover_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>{__('3056a5f8')}</h4>
                                <p dangerouslySetInnerHTML={{ __html: __('8dde9c02')}}></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/32oz_deep_stain_remover_he_circle.jpg" data-src="images/products_images/32oz_deep_stain_remover_he_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>{__('3056a5f8')} </h4>
                                <p dangerouslySetInnerHTML={{ __html: __('d0824e7e')}}></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/32oz_sealant_circle.jpg" data-src="images/products_images/32oz_sealant_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>{__('9fad52a3')}</h4>
                                <p dangerouslySetInnerHTML={{ __html: __('084d187c')}}></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/32oz_sealant_he_circle.jpg" data-src="images/products_images/32oz_sealant_he_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>{__('b316b5e3')}</h4>
                                <p dangerouslySetInnerHTML={{ __html: __('52e1315f')}}></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/22oz_paint_prep_circle.jpg" data-src="images/products_images/22oz_paint_prep_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>{__('1978bdc2')}</h4>
                                <p dangerouslySetInnerHTML={{ __html: __('d91dbdf6')}}></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/1gal_power_circle.jpg" data-src="images/products_images/1gal_power_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>{__('d6043464')}</h4>
                                <p dangerouslySetInnerHTML={{ __html: __('47bd3a53')}}></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/22oz_patio_circle.jpg" data-src="images/products_images/22oz_patio_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>{__('9b2443dc')}</h4>
                                <p dangerouslySetInnerHTML={{ __html: __('9b383d1b')}}></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/64oz_disinfectant_concentrate_circle.jpg" data-src="images/products_images/64oz_disinfectant_concentrate_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>{__('4660b95f')}</h4>
                                <p dangerouslySetInnerHTML={{ __html: __('eeedd1cc')}}></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/32oz_mold_killer_circle.jpg" data-src="images/products_images/32oz_mold_killer_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>{__('9b2443dc')}</h4>
                                <p dangerouslySetInnerHTML={{ __html: __('a7de7c97')}}></p>
                            </div>
                        </div>
                    </div>
                    <div className="ms-staff-info" id="staff-info"></div>
                </div>
            </div>
        );
    }
};

Carousel.propTypes = {
    initialValue: React.PropTypes.string
};
Carousel.defaultProps = {
    initialValue: ''
};

export default Carousel;
