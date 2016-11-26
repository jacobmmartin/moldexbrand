import React, {Component} from 'react';

//Load CSS and images
require("./retail.css");


class Retail extends Component {
  constructor() {
    super();
    this.state = {
      retailLocation1: [{
        title: "Ace Hardware",
        img: "./images/logos/ace.jpg",
        link: "https://www.acehardware.com"
      },
        {
          title: "True Value",
          img: "./images/logos/true_value.jpg",
          link: "https://www.truevalue.com"
        },
        {
          title: "Do It Best",
          img: "./images/logos/dib.jpg",
          link: "https://www.doitbest.com"
        },
        {
          title: "Canadian Tire",
          img: "./images/logos/canadian_tire.jpg",
          link: "https://www.canadiantire.ca/en.html"
        }
      ],
      retailLocation2: [{
        title: "Aubuchon",
        img: "./images/logos/aubuchon.jpg",
        link: "https://www.hardwarestore.com"
      },
        {
          title: "CampingWorld",
          img: "./images/logos/camping_world.jpg",
          link: "https://www.campingworld.com"
        },
        {
          title: "Bennys",
          img: "./images/logos/bennys.jpg",
          link: "https://www.hellobennys.com"
        },
        {
          title: "Home Depot Canada",
          img: "./images/logos/home_depot_ca.jpg",
          link: "https://www.homedepot.ca/webapp/wcs/stores/servlet/SearchView?catalogId=10051&amp;storeId=10051&amp;langId=-15&amp;N=0&amp;Ntt=moldex&amp;Nty=1&amp;D=moldex&amp;Ntx=mode+matchallpartial&amp;Dx=mode+matchallpartial&amp;s=true"
        }
      ],
      retailLocation3: [{
        title: "Rona",
        img: "./images/logos/rona.jpg",
        link: "https://www.rona.ca"
      }
      ],
      onlineRetails: [{
        title: "Amazon",
        img: "./images/logos/amazon.jpg",
        link: "https://www.amazon.com/s/ref=bl_sr_lawn-garden?ie=UTF8&field-brandtextbin=EnviroCare&node=2972638011"
      },
        {
          title: "Home Depot",
          img: "./images/logos/home_depot.jpg",
          link: "https://www.homedepot.com/s/moldex"
        },
        {
          title: "Home Depot Canada",
          img: "./images/logos/home_depot_ca.jpg",
          link: "https://www.homedepot.ca/webapp/wcs/stores/servlet/SearchView?catalogId=10051&storeId=10051&langId=-15&N=0&Ntt=moldex&Nty=1&D=moldex&Ntx=mode+matchallpartial&Dx=mode+matchallpartial&s=true"
        },
        {
          title: "Betty Mills",
          img: "./images/logos/betty_mills.jpg",
          link: "https://www.bettymills.com/shop/product/find/Envirocare.html"
        },
      ],
      suppliersAndDistributos1: [{
        title: "HD Supply",
        img: "./images/logos/hd_supply.jpg",
        link: "https://www.hdsupply.com"
      },
        {
          title: "Orgill",
          img: "./images/logos/orgill.jpg",
          link: "https://www.orgill.com"
        },
        {
          title: "Emery Waterhouse",
          img: "./images/logos/emery.jpg",
          link: "https://www.emerywaterhouse.com"
        },
        {
          title: "Pacoa",
          img: "./images/logos/lancaster.jpg",
          link: "https://www.lancasterco.com"
        }
      ],
      suppliersAndDistributos2: [{
        title: "Grainger",
        img: "./images/logos/grainger.jpg",
        link: "https://www.grainger.com"
      },
        {
          title: "House Hasson",
          img: "./images/logos/house_hasson.jpg",
          link: "https://www.househasson.com"
        },
        {
          title: "Northern Safety",
          img: "./images/logos/northern_safety.jpg",
          link: "https://www.northernsafety.com"
        },
        {
          title: "Martin & Associates",
          img: "./images/logos/martin.jpg",
          link: "https://www.martinassociatesind.ca"
        }
      ]
    }
  }
  render() {
    return (
      <div>

        <div className="page_title2">
          <div className="container">
            <div className="title">
              <h1>Find Our Products</h1><br></br>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="content_fullwidth" >
            <p dangerouslySetInnerHTML={{ __html: __("40fb2f11")}}></p>
            <p>&nbsp; </p>
            <p dangerouslySetInnerHTML={{ __html: __("b7d2acf7")}}></p>
            <div className="clearfix divider_dashed6"></div>
            <div className="big_text1">Retail Locations: </div>
            <div className="clearfix margin_top2"></div>

            {
              this.state.retailLocation1.map(function (retail) {
                return <div key={retail.title} className="one_fourth animate fadeInUp" data-anim-type="fadeInUp">
                  <div className="box">
                    <img src={retail.img} alt="" className="rimg" />
                    <p><a href={retail.link} title={retail.title} target="new" dangerouslySetInnerHTML={{ __html: __("66024a82")}}></a></p>
                  </div>
                </div>
              })
            }
          </div>

          <div className="clearfix margin_top2"></div>

          <div className="content_fullwidth">
            {
              this.state.retailLocation2.map(function (retail) {
                return <div  key={retail.title} className="one_fourth animate fadeInUp" data-anim-type="fadeInUp">
                  <div className="box">
                    <img src={retail.img} alt="" className="rimg" />
                    <p><a href={retail.link} title={retail.title} target="new" dangerouslySetInnerHTML={{ __html: __("66024a82")}}></a></p>
                  </div>
                </div>
              })
            }
          </div>

          <div className="clearfix margin_top2"></div>

          <div className="content_fullwidth">
            {
              this.state.retailLocation3.map(function (retail) {
                return <div key={retail.title} className="one_fourth animate fadeInUp" data-anim-type="fadeInUp">
                  <div className="box">
                    <img src={retail.img} alt="" className="rimg" />
                    <p><a href={retail.link} title={retail.title} target="new" dangerouslySetInnerHTML={{ __html: __("66024a82")}}></a></p>
                  </div>
                </div>
              })
            }
          </div>

          <div className="clearfix margin_top3"></div>

          <div className="content_fullwidth">
            <p dangerouslySetInnerHTML={{ __html: __("6121169c")}}></p>
          </div>

          <div className="clearfix divider_dashed6"></div>

          <div className="content_fullwidth">
            <div className="big_text1">Online Retailers: </div>
            <div className="clearfix margin_top2"></div>

            {
              this.state.onlineRetails.map(function (retail) {
                return <div key={retail.title} className="one_fourth animate fadeInUp" data-anim-type="fadeInUp">
                  <div className="box">
                    <img src={retail.img} alt="" className="rimg" />
                    <p><a href={retail.link} title={retail.title} target="new" dangerouslySetInnerHTML={{ __html: __("66024a82")}}></a></p>
                  </div>
                </div>
              })
            }
          </div>

          <div className="clearfix divider_dashed6"></div>


          <div className="content_fullwidth">
            <div className="big_text1">Industrial Suppliers &amp; Distributors: </div>
            <div className="clearfix margin_top2"></div>

            {
              this.state.suppliersAndDistributos1.map(function (retail) {
                return <div key={retail.title} className="one_fourth animate fadeInUp" data-anim-type="fadeInUp">
                  <div className="box">
                    <img src={retail.img} alt="" className="rimg" />
                    <p><a href={retail.link} title={retail.title} target="new" dangerouslySetInnerHTML={{ __html: __("66024a82")}}></a></p>
                  </div>
                </div>
              })
            }

            <div className="clearfix margin_top2"></div>

            {
              this.state.suppliersAndDistributos2.map(function (retail) {
                return <div key={retail.title} className="one_fourth animate fadeInUp" data-anim-type="fadeInUp">
                  <div className="box">
                    <img src={retail.img} alt="" className="rimg" />
                    <p><a href={retail.link} title={retail.title} target="new" dangerouslySetInnerHTML={{ __html: __("66024a82")}}></a></p>
                  </div>
                </div>
              })
            }
          </div>

          <div className="clearfix margin_top7"></div>

        </div>

      </div>
    );
  }
}

export default Retail;
