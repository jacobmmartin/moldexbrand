import React, {Component} from 'react';
let Products = require("../../../products/products.json")
__("07d74ef5")
class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: Products[this.props.params.id]
        };
    }


    render() {
        return (
            <div>
                <div className="content_fullwidth">
                    <div className="container">
                        <br/>
                        <div className="one_half"><img src={this.state.product.images.full} alt="" className="img_size1"/></div>
                        <div className="one_half last">
                            
                            <h3 className="title" dangerouslySetInnerHTML={{ __html: this.state.product.name }}></h3>
                            <h5 className="green" dangerouslySetInnerHTML={{ __html: __("c18349f0")}}></h5>

                            <p dangerouslySetInnerHTML={{ __html: this.state.product.desc }}></p>
                            <br/>
                            <p dangerouslySetInnerHTML={{ __html: this.state.product.application }}></p>
                            <div className="content_fullwidth2">
                                <p><img src="https://www.moldexbrands.com/images/factor_1.png" alt=""/>
                                    <a href="how-to-get-rid-of-mold-and-mildew.html"><img src="https://www.moldexbrands.com/images/3factor.png" width="200" height="88" alt=""/></a>
                                </p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="clearfix"></div>
                            <div className="content_fullwidth3">
                                <ul className="list_empty">
                                    <li><a href="http://www.homedepot.com/p/Moldex-32-oz-Disinfectant-Cleaner-5010/205176689" target="new" className="but_shopping_cart"><i className="fa fa-shopping-cart fa-lg"></i> Buy Online</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="clearfix divider_dashed2"></div>
                        <div className="two_third">
                            <ul className="tabs3 two">
                                <li className="active"><a href="#example-3-tab-1" target="_self">Instructions</a></li>
                                <li></li>
                                <li><a href="#example-3-tab-2" target="_self">SDS</a></li>
                                <li><a href="#example-3-tab-3" target="_self">FAQ</a></li>
                                <li><a href="#example-3-tab-4" target="_self">Product Label</a></li>
                                <li><a href="#example-3-tab-5" target="_self">Available Sizes</a></li>
                            </ul>
                            <div className="tabs-content3 two">
                                <div id="example-3-tab-1" className="tabs-panel3">
                                    <p><strong>GENERAL CLEANING / DEODORIZING DIRECTIONS: </strong></p>
                                    <p>Spray soiled area then wipe clean.Repeat for heavily soiled areas.</p>
                                    <p><strong>DISINFECTION DIRECTIONS: </strong></p>
                                    <p>Preclean prior to disinfection.Spray 6 - 8 inches from surface, until surfaces are thoroughly wet.Do not breathe spray.Treated surfaces must remain wet for 1 minute for disinfection against bacteria.Follow virucidal or Fungicidal directions when using as a virucidal or fungicidal agent.Wipe dry with a clean cloth, sponge, mop or allow to air dry.Food contact surfaces must be rinsed with potable water after disinfection.Do not use on utensils, glassware and dishes.</p>
                                    <p><strong>VIRUCIDAL DIRECTIONS: </strong></p>
                                    <p>Follow disinfection directions for application instructions.Treated surfaces must remain wet for 10 minutes for Herpes Simplex Type 2 and 60 seconds[1 minute]for Influenza A / Hong Kong.</p>
                                    <p><strong>MOLD AND MILDEW CONTROL DIRECTIONS: </strong></p>
                                    <p>Moldex<span className="sup">®</span> Mold Killer effectively inhibits the growth of mold and mildew and the odors caused by them when applied to hard, nonporous surfaces.Follow disinfection instructions.Allow to air dry on surface.Repeat when mildew growth returns.</p>
                                    <p><strong>FUNGICIDAL DIRECTIONS: </strong></p>
                                    <p>Moldex<span className="sup">®</span> Mold Killer is an effective fungicide against Trichophyton mentagrophytes (the Athlete’s Foot Fungus) (A Cause of Ringworm) in areas such as locker rooms, dressing rooms, shower and bath areas, exercise facilities, health clubs and spas.Follow disinfection directions for application instructions.Treated surfaces must remain wet for 10 minutes.<br/>
                                        <strong>Note: </strong> Refer to product label for additional directions for use, a full list of pathogens, and safety information.</p>
                                </div>

                                <div id="example-3-tab-2" className="tabs-panel3" style={{ display: 'none' }}>
                                    <p>Safety Data Sheet: </p>
                                    <p><a href="downloads/Moldex_Mold_Killer_SDS.pdf" title="Stain Remover MSDS" target="new">Mold Killer SDS</a></p>
                                </div>

                                <div id="example-3-tab-3" className="tabs-panel3" style={{ display: 'none' }}>
                                    <h6>Does this product kill mold &amp; mildew?</h6>
                                    <p><strong>Yes.</strong> Moldex<span className="sup">®</span> Mold Killer is effective against a broad spectrum of bacteria, is virucidal*, fungicidal, and inhibits the growth of mildew and their odors when used as directed.</p>
                                    <br/>
                                    <h6>Does this product have bleach in it?</h6>
                                    <p><strong>No.</strong>Moldex<span className="sup">®</span> Mold Killer is an EPA registered quaternary ammonium solution.Quaternary ammonium chlorides, or “quats, ” are noncorrosive, making them gentler on  equipment and surfaces.Bleach (active ingredient Sodium Hypochloride) is very effective in removing the discoloration caused by mold, but may leave the microflora that enables the mold to grow.</p>
                                    <br/>
                                    <h6>Does Moldex<span className="sup">®</span> Mold Killer remove mold stains?</h6>
                                    <p><strong>Yes &amp; No.</strong>Mold &amp; Mildew, if left untreated, can result in deeply embedded ugly black mold stains.In some cases, it will remove the stain.In other cases, a more aggressive stain remover will be required.Moldex<span className="sup">®</span> Mold Killer is a great cleaner that delivers non-acid cleaning performance.It removes   dirt, grease, grime, food stains, soap scum, fingerprints, crayon / pencil marks and heel marks, but it does NOT contain bleach or whitening agents.If difficult mold stains are present, we recommend using one of our stain removers.Non-Bleach - <a href="deep_stain_remover.html">Non-Bleach Stain Remover</a> or Bleach-based - <a href="../instant-mold-mildew-stain-remover.html">Instant Mold &amp; Mildew Stain Remover</a>.</p>
                                    <br/>
                                    <h6>What surfaces can I use this product on?Can it be used outdoors?</h6>
                                    <p>This formula was approved by the EPA for use on a variety of surfaces.For a complete list of EPA approved surfaces, you can view them <a href="downloads/approved_surfaces.pdf">here</a>.</p>
                                    <br/>
                                </div>

                                <div id="example-3-tab-4" className="tabs-panel3" style={{ display: 'none' }}>
                                    <p>Product Labels: </p>
                                    <p><a href="downloads/32oz_Moldex_Mold_Killer.pdf" title="32oz Moldex Mold Killer" target="new">32oz Trigger Bottle (Front &amp; Back) Labels</a></p>
                                    <p><a href="downloads/22oz_Moldex_Mold_Killer.pdf" title="22oz Moldex Mold Killer" target="new">22oz Trigger Bottle (Front &amp; Back) Labels</a></p>
                                    <p><a href="downloads/1Gal_Moldex_Mold_Killer.pdf" title="1 gallon Moldex Mold Killer" target="new">1 Gallon Bottle Label</a></p>
                                    <p><a href="downloads/5Gal_Moldex_Mold_Killer.pdf" title="5 gallon Moldex Mold Killer" target="new">5 Gallon Bottle  Label</a></p>
                                </div>

                                <div id="example-3-tab-5" className="tabs-panel3" style={{ display: 'none' }}>
                                    <p>This product is available in: </p>
                                    <p><a href="images/32oz_mold_killer_800_600.jpg" target="new" className="cbp-lightbox">32oz Trigger Sprayer</a><br/>
                                    </p><p><a href="images/22oz_mold_killer_800_600.jpg" target="new" className="cbp-lightbox">22oz Trigger Sprayer</a></p>
                                    <p><a href="images/1Gal_mold_killer_800_600.jpg" target="new" className="cbp-lightbox">1 Gallon Bottle</a></p>
                                    <p><a href="images/5Gal_mold_killer_800_600.jpg" target="new" className="cbp-lightbox">5 Gallon Pail</a></p>
                                    <p>&nbsp; </p>
                                </div>

                            </div>

                        </div>

                        <div className="one_third last">

                            <h3>Features / <strong>Benefits</strong></h3>

                            <ul className="list_4">
                                {
                                    this.state.product.features.map( (feature) => {
                                        return <li key={feature}><i className="fa fa-arrow-circle-o-right"></i> {feature}</li>
                                    })
                                }
                            </ul>


                        </div>



                    </div>

                    <div className="clearfix margin_top3"></div>
                    <div className="features_sec43 two three">
                        <div className="container">

                            <h3><strong>Similar</strong> Products</h3>
                            <br/>

                            <div className="one_fourth animate fadeInUp" data-anim-type="fadeInUp">
                                <div className="box">

                                    <a href="../disinfectant-conc.html"><img src="https://www.moldexbrands.com/images/disinfectant_conc_bottom_sm.png" alt="" className="rimg"/></a>

                                    <h5><a href="../disinfectant-conc.html">Disinfectant (Concentrate) </a></h5>
                                    <h6>Makes 32 Gallons</h6>

                                    <p>It cleans, disinfects, and deodorizes surfaces by killing odor-causing microorganisms and prevents the growth of mold and mildew</p>
                                    <br/>


                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        );
    }
}

export default Product;