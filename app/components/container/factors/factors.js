import React, {Component} from 'react';
import PageTitle from "../../presentation/pageTitle/pageTitle";

class Factors extends Component {
    render() {
        return (
            <div>

             <PageTitle  title="How it works?"/>
            <div className="container">
            <div className="content_fullwidth">
                <div className="one_full">
                    <div className="big_text1">Our method is <i>Kill, Clean, and Prevent</i>. It is simple really. We call it the "3 Factors in Mold Fighting™". It works because each proprietary formula targets a specific step in mold growth and builds on the previous.</div>
                    <div className="clearfix margin_top2"></div>
                    <div className="one_full center">
                        <img src="https://www.moldexbrands.com/images/3_factors_lg.png" width="396" height="201" className="img_size2" alt=""/></div>
                    <br/>
                    <p dangerouslySetInnerHTML={{ __html: __("19961677")}}></p>
                </div>

                <div className="clearfix"></div>
                <div className="clearfix divider_dashed6"></div>
                <div className="one_half"><img src="https://www.moldexbrands.com/images/mold_root_factor_1.jpg" alt="" className="img_size1"  style={{border:"1px solid black"}}/></div>

                <div className="one_half last">
                    <h3 dangerouslySetInnerHTML={{ __html: __("aaa414b3")}}></h3>
                    <p dangerouslySetInnerHTML={{ __html: __("55131be7")}}></p>
                </div>

                <div className="clearfix margin_top6"></div>
                <div className="one_half"><img src="https://www.moldexbrands.com/images/mold_root_factor_2.jpg" alt="" className="img_size1"  style={{border:"1px solid black"}}/></div>

                <div className="one_half last">
                    <h3 dangerouslySetInnerHTML={{ __html: __("a171eadb")}}></h3>
                    <p dangerouslySetInnerHTML={{ __html: __("f8631610")}}></p>
                </div>

                <div className="clearfix margin_top6"></div>
                <div className="one_half"><img src="https://www.moldexbrands.com/images/mold_root_factor_3.jpg" alt="" className="img_size1"  style={{border:"1px solid black"}}/></div>

                <div className="one_half last">
                    <h3 dangerouslySetInnerHTML={{ __html: __("9977b9c8")}}></h3>
                    <p dangerouslySetInnerHTML={{ __html: __("b7c137a3")}}></p>
                </div>
            </div>
            <div className="clearfix divider_dashed6"></div>
            <div className="one_full">
                <p dangerouslySetInnerHTML={{ __html: __("16a72764")}}></p>
            </div>
            <div className="big_text1 center">Like professional <i>mold remediators</i>, we believe this is the best way to approach mold &amp; mildew.
                <br/>
                <strong><i>1.</i> KILL <i> 2.</i> CLEAN <i>3.</i> PREVENT</strong></div>
            </div>
            <div className="clearfix margin_top7"></div>
            </div>

        );
    }
}

export default Factors;
