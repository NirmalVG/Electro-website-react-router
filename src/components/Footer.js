import React, {Component} from 'react';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import {Link} from 'react-router-dom';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="text-center footer-content text-lg-start bg-light text-muted">
          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <img src="images/Electro.png" alt="Bootstrap" width="200" height="50" class="d-inline-block align-top" />
                    <p className="descrip">
                    A smart store with smart accessories
                    </p>
                    <a href="#!" class="icon-button twitter"><FontAwesomeIcon icon={faTwitter} /><span></span></a>
                    <a href="#!" class="icon-button facebook"><FontAwesomeIcon icon={faFacebook} /><span></span></a>
                    <a href="#!" class="icon-button instagram"><FontAwesomeIcon icon={faInstagram} /><span></span></a>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Quick Links
                    </h6>
                    <p>
                      <Link to="/" className="text-reset">Home</Link>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Shop</a>
                    </p>
                    <p>
                      <Link to="/about" className="text-reset">About</Link>
                    </p>
                    <p>
                      <Link to="/contact" className="text-reset">Contact</Link>
                    </p>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Useful links
                    </h6>
                    <p>
                      <a href="#!" className="text-reset">Pricing</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Settings</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Orders</a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">Help</a>
                    </p>
                  </div>
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Contact
                    </h6>
                    <p className="text-link"><FontAwesomeIcon icon={faHome} /> Thrissur, Kerala, India</p>
                    <p className="text-link">
                    <FontAwesomeIcon icon={faEnvelope} /> electroproducts@email.com
                    </p>
                    <p className="text-link"><FontAwesomeIcon icon={faPhone} /> + 97 234 567 88</p>
                    <p className="text-link"><FontAwesomeIcon icon={faPrint} /> + 01 234 567 89</p>
                  </div>
                </div>
              </div>
            </section>
          </footer>
      </div>
    )
  }
}

export default Footer;