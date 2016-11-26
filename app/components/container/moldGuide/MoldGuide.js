import React from 'react';
import PageTitle from "../../presentation/pageTitle/pageTitle";

require("./moldGuide.css");

const MoldGuide = () =>{
    return(
            <div>
              <PageTitle  title="Mold & Nildew Guide"/>
              <div className="container">
                <div className="content_fullwidth">
                        <div className="one_full">
                            <div className="big_text1">Mold &amp; Mildew Basic Training:</div>
                            <p dangerouslySetInnerHTML={{ __html: __("bce1469e")}}></p>
                        </div>

                        <div className="clearfix"></div>
                        <div className="clearfix divider_dashed6"></div>
                        <div className="one_third"><img src="./images/mold_1.jpg" alt="" className="img_size1"/></div>

                        <div className="two_third last">
                            <h3><strong>Alternaria</strong></h3>
                            <p dangerouslySetInnerHTML={{ __html: __("5020e692")}}></p>
                        </div>

                        <div className="clearfix margin_top6"></div>
                        <div className="one_third"><img src="./images/mold_2.jpg" alt="" className="img_size1"/></div>

                        <div className="two_third last">
                            <h3><strong>Aspergillus</strong></h3>
                            <p dangerouslySetInnerHTML={{ __html: __("30b9a525")}}></p>
                        </div>

                        <div className="clearfix margin_top6"></div>
                        <div className="one_third"><img src="./images/mold_3.jpg" alt="" className="img_size1"/></div>

                        <div className="two_third last">
                            <h3><strong>Cladosporium</strong></h3>
                            <p dangerouslySetInnerHTML={{ __html: __("583ec0b7")}}></p>
                        </div>

                        <div className="clearfix margin_top6"></div>
                        <div className="one_third"><img src="./images/mold_4.jpg" alt="" className="img_size1"/></div>

                        <div className="two_third last">
                            <h3><strong>Penicillium</strong></h3>
                            <p dangerouslySetInnerHTML={{ __html: __("f9a54fa3")}}></p>
                        </div>

                        <div className="clearfix margin_top6"></div>
                        <div className="one_third"><img src="./images/mold_5.jpg" alt="" className="img_size1"/></div>

                        <div className="two_third last">
                            <h3><strong>Stachybotrys</strong></h3>
                            <p dangerouslySetInnerHTML={{ __html: __("b4cab207")}}></p>
                        </div>
                  </div>


                  <div className="one_full">
                    <div className="clearfix margin_top2"></div>
                    <p dangerouslySetInnerHTML={{ __html: __("e22fe1db")}} ></p>
                    <div className="clearfix divider_dashed6"></div>
                    <div className="big_text1" >Resources &amp; Links:
                        <p dangerouslySetInnerHTML={{ __html: __("e969e3d2")}}></p>
                        <p dangerouslySetInnerHTML={{ __html: __("077012da")}}></p>
                    </div>
                    <div className="clearfix margin_top2"></div>
                    <div className="big_text1">Flood Support &amp; Information:
                        <p dangerouslySetInnerHTML={{ __html: __("43acc856")}}></p>
                    </div>
                    <div className="clearfix margin_top2"></div>
                    <div className="big_text1">Cleaning &amp; Prevention:
                        <p dangerouslySetInnerHTML={{ __html: __("8c86fbcb")}}></p>
                    </div>
                    <div className="clearfix margin_top2"></div>
                  </div>
            </div>
            <div className="clearfix margin_top7"></div>
            </div>
    )
}

export default MoldGuide
