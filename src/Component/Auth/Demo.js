import React from "react";
import { useEffect } from "react";
import axios from "axios";
import './demo.css'


function Login({showAlert}) {
  useEffect(() => {
    // Initialize the gallery when the component mounts
    // const lightGallery = require('lightgallery');
    // lightGallery(document.getElementById('lightgallery'));
  }, []);
  return (
    <div className="container-fluid">
    <div className="row">

                <div className="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
                        <img src="http://i.imgur.com/PUeaHfC.png" alt="" />
                        <div className="portfolio_images_overlay text-center">
                            <h6 className="clrd-font">Italian Source Mushroom</h6>
                            <p className="clrd-font product_price"> <i className="fa fa-usd clrd-font" aria-hidden="true"></i> 12</p>
                            <a href="#" className="btn btn-primary">Click here</a>
                        </div>
                        <a className="fancybox" rel="ligthbox" href="http://i.imgur.com/PUeaHfC.png">
                            <div className="zoom"></div>
                        </a>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
                        <img src="http://i.imgur.com/uX3g4Nl.png" alt="" />
                        <div className="portfolio_images_overlay text-center">
                            <h6 className="clrd-font">Italian Source Mushroom</h6>
                            <p className="clrd-font product_price"> <i className="fa fa-usd clrd-font" aria-hidden="true"></i> 12</p>
                            <a href="#" className="btn btn-primary">Click here</a>
                        </div>
                        <a className="fancybox" rel="ligthbox" href="http://i.imgur.com/PUeaHfC.png">
                            <div className="zoom"></div>
                        </a>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
                        <img src="http://i.imgur.com/8cOtAS9.png" alt="" />
                        <div className="portfolio_images_overlay text-center">
                            <h6 className="clrd-font">Italian Source Mushroom</h6>
                            <p className="clrd-font product_price"> <i className="fa fa-usd clrd-font" aria-hidden="true"></i> 12</p>
                            <a href="#" className="btn btn-primary">Click here</a>
                        </div>
                        <a className="fancybox" rel="ligthbox" href="http://i.imgur.com/8cOtAS9.png">
                            <div className="zoom"></div>
                        </a>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
                        <img src="http://i.imgur.com/p7OYoBT.png" alt="" />
                        <div className="portfolio_images_overlay text-center">
                            <h6 className="clrd-font">Italian Source Mushroom</h6>
                            <p className="clrd-font product_price"> <i className="fa fa-usd clrd-font" aria-hidden="true"></i> 12</p>
                            <a href="#" className="btn btn-primary">Click here</a>
                        </div>
                        <a className="fancybox" rel="ligthbox" href="http://i.imgur.com/p7OYoBT.png">
                            <div className="zoom"></div>
                        </a>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
                        <img src="http://i.imgur.com/uZeTibF.png" alt="" />
                        <div className="portfolio_images_overlay text-center">
                            <h6 className="clrd-font">Italian Source Mushroom</h6>
                            <p className="clrd-font product_price"> <i className="fa fa-usd clrd-font" aria-hidden="true"></i> 12</p>
                            <a href="#" className="btn btn-primary">Click here</a>
                        </div>
                        <a className="fancybox" rel="ligthbox" href="http://i.imgur.com/uZeTibF.png">
                            <div className="zoom"></div>
                        </a>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
                        <img src="http://i.imgur.com/ymwlLln.png" alt="" />
                        <div className="portfolio_images_overlay text-center">
                            <h6 className="clrd-font">Italian Source Mushroom</h6>
                            <p className="clrd-font product_price"> <i className="fa fa-usd clrd-font" aria-hidden="true"></i> 12</p>
                            <a href="#" className="btn btn-primary">Click here</a>
                        </div>
                        <a className="fancybox" rel="ligthbox" href="http://i.imgur.com/ymwlLln.png">
                            <div className="zoom"></div>
                        </a>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
                        <img src="http://i.imgur.com/PUeaHfC.png" alt="" />
                        <div className="portfolio_images_overlay text-center">
                            <h6 className="clrd-font">Italian Source Mushroom</h6>
                            <p className="clrd-font product_price"> <i className="fa fa-usd clrd-font" aria-hidden="true"></i> 12</p>
                            <a href="#" className="btn btn-primary">Click here</a>
                        </div>
                        <a className="fancybox" rel="ligthbox" href="http://i.imgur.com/PUeaHfC.png">
                            <div className="zoom"></div>
                        </a>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12 single_portfolio_text">
                        <img src="http://i.imgur.com/A8FRrbS.png" alt="" />
                        <div className="portfolio_images_overlay text-center">
                            <h6 className="clrd-font">Italian Source Mushroom</h6>
                            <p className="clrd-font product_price"> <i className="fa fa-usd clrd-font" aria-hidden="true"></i> 12</p>
                            <a href="#" className="btn btn-primary">Click here</a>
                        </div>
                        <a className="fancybox" rel="ligthbox" href="http://i.imgur.com/A8FRrbS.png">
                            <div className="zoom"></div>
                        </a>
                </div>

    </div>
</div>
  );
}

export default Login;
