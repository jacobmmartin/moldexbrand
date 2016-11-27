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
                                <h4>INSTANT DECK WASH</h4>
                                <p>Cleans & Brightens Decks & Fences.No Scrubbing.Spray on, Wash off.
                                    <a href="../instant-deck-fence-wash.html" className="readmore_but11 margin_top2" data-anim-type="zoomIn" data-anim-delay="750"> Learn more.</a></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/32oz_deep_stain_remover_circle.jpg" data-src="images/products_images/32oz_deep_stain_remover_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>Non-Bleach Stain Remover</h4>
                                <p><strong>Bleach-Free / Oxy-Power</strong> Mold & Mildew Stain Remover
                                    <a href="../non-bleach-stain-remover.html" className="readmore_but11 margin_top2" data-anim-type="zoomIn" data-anim-delay="750"> Learn more.</a></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/32oz_deep_stain_remover_he_circle.jpg" data-src="images/products_images/32oz_deep_stain_remover_he_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>Non-Bleach Stain Remover (HOSE END) </h4>
                                <p>Multi-Surface <strong>Bleach-Free</strong> Outdoor Cleaner.Cleans up to 3, 000 sq.ft.Easy-Peasy <a href="../non-bleach-stain-remover.html" className="readmore_but11 margin_top2" data-anim-type="zoomIn" data-anim-delay="750"> Learn more.</a></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/32oz_sealant_circle.jpg" data-src="images/products_images/32oz_sealant_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>SEALANT</h4>
                                <p>Clear Water-Based Film.Resists Mold & Mildew Stains.Provides Long-lasting Resistance to Mold Discoloration.
                                    <a href="../sealant-mold-mildew-blocker.html" className="readmore_but11 margin_top2" data-anim-type="zoomIn" data-anim-delay="750"> Learn more.</a></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/32oz_sealant_he_circle.jpg" data-src="images/products_images/32oz_sealant_he_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>SEALANT (HOSE END) </h4>
                                <p>Multi-Surface Outdoor Blocker that Resists Mold & Mildew Stains.Covers up to 3, 000 sq.ft.
                                    <a href="../sealant-mold-mildew-blocker.html" className="readmore_but11 margin_top2" data-anim-type="zoomIn" data-anim-delay="750"> Learn more.</a></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/22oz_paint_prep_circle.jpg" data-src="images/products_images/22oz_paint_prep_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>PAINT PREP</h4>
                                <p>Hard Surface Cleaner / TSP Alternative.Cleans and Deglosses to Improve Paint Adhesion.
                                    <a href="../paint-preparation.html" className="readmore_but11 margin_top2" data-anim-type="zoomIn" data-anim-delay="750"> Learn more.</a></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/1gal_power_circle.jpg" data-src="images/products_images/1gal_power_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>POWER OUTDOOR</h4>
                                <p>Multi-Purpose Outdoor Cleaner & Power Washer Concentrate.
                                    <a href="../power-outdoor-cleaner.html" className="readmore_but11 margin_top2" data-anim-type="zoomIn" data-anim-delay="750"> Learn more.</a></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/22oz_patio_circle.jpg" data-src="images/products_images/22oz_patio_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>PATIO FURNITURE CLEANER</h4>
                                <p>Removes Mold, Mildew, Dirt and More!2-in-1 Formula that Cleans & Protects.
                                    <a href="../cleaning-mold-on-patio-furniture.html" className="readmore_but11 margin_top2" data-anim-type="zoomIn" data-anim-delay="750"> Learn more.</a></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/64oz_disinfectant_concentrate_circle.jpg" data-src="images/products_images/64oz_disinfectant_concentrate_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>MOLD DISINFECTANT (CONCENTRATE) </h4>
                                <p>cleans, disinfects, and deodorizes surfaces by killing odor-causing microorganisms and prevents the growth of mold and mildew.
                                    <a href="../disinfectant-conc.html" className="readmore_but11 margin_top2" data-anim-type="zoomIn" data-anim-delay="750"> Learn more.</a></p>
                            </div>
                        </div>
                        <div className="ms-slide">
                            <img src="https://www.moldexbrands.com/images/products_images/32oz_mold_killer_circle.jpg" data-src="images/products_images/32oz_mold_killer_circle.jpg" alt="" />
                            <div className="ms-info">
                                <h4>MOLD KILLER</h4>
                                <p>Kills Mold & Mildew.Destroys and Neutralizes Mold, Mildew, Bacteria, Fungus and Odors at their source
                                    <a href="https://www.moldexbrands.com/mold-mildew-killer.html" className="readmore_but11 margin_top2" data-anim-type="zoomIn" data-anim-delay="750"> Learn more.</a></p>
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
