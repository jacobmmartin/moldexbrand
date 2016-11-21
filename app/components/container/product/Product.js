import React, {Component} from 'react';
import language from "../../../language.js";

let Products = language.Products;
require("./product.css");

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: Products[this.props.params.id]
        };
    }
    componentWillReceiveProps(nexProps) {
        this.setState({ product: Products[nexProps.params.id] });
    }
    render() {
        return (
            <div>
             <div className="page_title">
                <div className="container">
                    <h1 dangerouslySetInnerHTML={{ __html: this.state.product.name }}></h1>
                </div>
            </div>
            <div className="product_comp">
                <div className="content_fullwidth">
                    <div className="container">
                        <br/>
                        <div className="one_half"><img src={this.state.product.images.full} alt="" className="img_size1"/></div>
                        <div className="one_half last">

                            <h3 className="title" dangerouslySetInnerHTML={{ __html: this.state.product.name }}></h3>
                            <h5 className="green" dangerouslySetInnerHTML={{ __html: this.state.product.headline }}></h5>

                            <p dangerouslySetInnerHTML={{ __html: this.state.product.desc }}></p>
                            <br/>
                            <p dangerouslySetInnerHTML={{ __html: this.state.product.application }}></p>
                            <br/>
                            <br/>
                            <div className="content_fullwidth2">
                                <p><img src={this.state.product.images.factor} alt=""/>
                                    <a href="how-to-get-rid-of-mold-and-mildew.html"><img src="./images/3factor.png" width="200" height="88" alt=""/></a>
                                </p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="clearfix"></div>
                            <div className="content_fullwidth3">
                                <ul className="list_empty">
                                    <li><a href={this.state.product.buy} target="new" className="but_shopping_cart"><i className="fa fa-shopping-cart fa-lg"></i> Buy Online</a></li>
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
                                <div id="example-3-tab-1" className="tabs-panel3" dangerouslySetInnerHTML={{ __html: this.state.product.tabs.instructions }}>
                                </div>
                                <div id="example-3-tab-2" className="tabs-panel3" style={{ display: 'none' }}>
                                    <p>Safety Data Sheet: </p>
                                     {
                                        this.state.product.tabs.sds.map((sds) => {
                                            return <p key={sds.name} ><a href={sds.url}  title={sds.title} target="new">{sds.name}</a></p>
                                        })
                                    }

                                </div>
                                <div id="example-3-tab-3" className="tabs-panel3" style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: this.state.product.tabs.faq }}>
                                </div>
                                <div id="example-3-tab-4" className="tabs-panel3" style={{ display: 'none' }}>
                                    <p>Product Labels: </p>
                                    {
                                        this.state.product.tabs.labels.map((label) => {
                                            return <p key={this.state.product.name + label.name}><a href={label.image} target="new" className="cbp-lightbox">{label.name}</a></p>
                                        })
                                    }
                                </div>
                                <div id="example-3-tab-5" className="tabs-panel3" style={{ display: 'none' }} >
                                    <p>This product is available in: </p>
                                    {
                                        this.state.product.tabs.sizes.map((size) => {
                                            return <p key={this.state.product.name + size.name}><a href={"images/" + size.image } target="new" className="cbp-lightbox">{size.name}</a></p>
                                        })
                                    }
                                </div>
                            </div>

                        </div>

                        <div className="one_third last">
                            <h3>Features / <strong>Benefits</strong></h3>
                            <ul className="list_4">
                                {
                                    this.state.product.features.map((feature) => {
                                        return <li key={this.state.product.name + feature}><i className="fa fa-arrow-circle-o-right"></i> <div dangerouslySetInnerHTML={{ __html: feature}}></div></li>
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
                            {
                                this.state.product.similar.map((product) => {
                                    return <div key={this.state.product.name + product.name}  className="one_fourth animate fadeInUp" data-anim-type="fadeInUp">
                                        <div className="box">
                                            <a href={"#" +product.link}><img src={product.img} alt="" className="rimg"/></a>
                                            <h5><a href={"#" + product.link} > {product.name} </a></h5>
                                            <h6>{product.type}</h6>
                                            <p>{product.description}</p>
                                            <br/>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
            </div>
        );
    }
}

export default Product;
