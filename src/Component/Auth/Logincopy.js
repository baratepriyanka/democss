import React from "react";
import { useEffect } from "react";
import axios from "axios";
import './logincoy.css'


function Login({showAlert}) {
  useEffect(() => {
    // Initialize the gallery when the component mounts
    // const lightGallery = require('lightgallery');
    // lightGallery(document.getElementById('lightgallery'));
  }, []);
  return (
    <div className="container" style={{marginTop:"40px"}}>
    <h2>Jquery LightGallery</h2>
    <div className="demo-gallery">
        <ul id="lightgallery" className="list-unstyled row">
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/1-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/1-1600.jpg" data-sub-html="<h4>Fading Light</h4><p>classNameic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-1.jpg" />
                </a>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg" data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-2.jpg"/>
                </a>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/13-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/13-1600.jpg" data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg"/>
                </a>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/4-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/4-1600.jpg" data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-4.jpg"/>
                </a>
            </li>
    <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/1-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/1-1600.jpg" data-sub-html="<h4>Fading Light</h4><p>classNameic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-1.jpg"/>
                </a>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg" data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-2.jpg"/>
                </a>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/13-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/13-1600.jpg" data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg"/>
                </a>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/4-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/4-1600.jpg" data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-4.jpg"/>
                </a>
            </li>
    <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg" data-sub-html="<h4>Fading Light</h4><p>classNameic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-2.jpg"/>
                </a>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/1-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/1-1600.jpg" data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-1.jpg"/>
                </a>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg" data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-2.jpg"/>
                </a>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/13-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/13-1600.jpg" data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg"/>
                </a>
            </li>
    <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/4-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/4-1600.jpg" data-sub-html="<h4>Fading Light</h4><p>classNameic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-4.jpg"/>
                </a>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/1-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/1-1600.jpg" data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-1.jpg"/>
                </a>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg" data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-2.jpg"/>
                </a>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/13-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/13-1600.jpg" data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg"/>
                </a>
            </li>
    <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/4-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/4-1600.jpg" data-sub-html="<h4>Fading Light</h4><p>classNameic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-4.jpg"/>
                </a>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/1-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/1-1600.jpg" data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-1.jpg"/>
                </a>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/2-1600.jpg" data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-2.jpg"/> 
                </a>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-2 col-lg-2" data-responsive="https://sachinchoolur.github.io/lightgallery.js/static/img/13-1600.jpg" data-src="https://sachinchoolur.github.io/lightgallery.js/static/img/13-1600.jpg" data-sub-html="<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>">
                <a href="">
                    <img className="img-responsive" src="https://sachinchoolur.github.io/lightgallery.js/static/img/thumb-13.jpg"/>
                </a>
            </li>
        </ul>
    </div>
</div>
  );
}

export default Login;
