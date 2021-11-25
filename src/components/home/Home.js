import React, {Component} from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';

class Home extends Component {
    render() {
      return (
        <div>
          <div className="container">
            <div className="ad-main col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <img className="img-main img-zoom" src="images/Beatsolo.png" alt="Beatsolo"></img>
              <button className="add-button">Shop by Category</button> 
            </div>
            <div className="first-row">
              <div className="first-section earphone-section col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <img className="ear-img img-zoom" src="images/Enjoy.png" alt="Earphone"></img>
              </div>
              <div className="first-section wear-section col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <img className="wear-img img-zoom" src="images/Wear.png" alt="wear"></img>
              </div>
              <div className="first-section laptop-section col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <img className="laptop-img img-zoom" src="images/Laptop.png" alt="laptop"></img>
              </div>
            </div>
            <div className="second-row">
              <div className="second-section console-section col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <img className="console-img img-zoom" src="images/Console.png" alt="console"></img>
              </div>
              <div className="second-section oculus-section col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <img className="oculus-img img-zoom" src="images/Oculus.png" alt="oculus"></img>
              </div>
              <div className="second-section speaker-section col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <img className="speaker-img img-zoom" src="images/Speaker.png" alt="speaker"></img>
              </div>
            </div>
            <div className="support-row row">
              <div className="single-feature col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <div classname="support-img">
                  <img src="images/free-shipping.png" alt="shipping"></img>
                </div>
                <div className="text-right">
                  <p className="head-support">Free Shipping</p>
                  <p className="text-desc">Free Shipping In All Order</p>
                </div>
              </div>
              <div className="single-feature col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <div classname="support-img">
                  <img src="images/money-guarentee.png" alt="money guarentee"></img>
                </div>
                <div className="text-right">
                  <p className="head-support">Money Guarentee</p>
                  <p className="text-desc">30 Day Money Back</p>
                </div>
              </div>
              <div className="single-feature col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <div classname="support-img">
                  <img src="images/online-support.png" alt="online support"></img>
                </div>  
                <div className="text-right">
                  <p className="head-support text-right">Online Support 24/7</p>
                  <p className="text-desc">Technical Support 24/7</p>
                </div> 
              </div>
              <div className="single-feature col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <div classname="support-img">
                  <img src="images/secure-payment.png" alt="secure payment"></img>
                </div>
                <div className="text-right">
                  <p className="head-support text-right">Secure Payment</p>
                  <p className="text-desc">All cards accepted</p>
                </div> 
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default Home;