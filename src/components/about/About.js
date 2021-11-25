import React, {Component} from 'react';
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
      return (
        <section className="main-sec">
            <div className = "image">
                <img className="about-img" src="images/about-us.png" alt="about" />
            </div>
            <div className = "content">
                <h2>About Us</h2>
                <span></span>
                <p>Electro is one of India's best technology and digital lifestyle shopping portal. And providing a simulating online shopping experience, it offers the latest range of gadgets and electronic products at most competitive prices. We ensure that your online shopping experience at Electro is easy, enjoyable and absolutely secure.</p>
                <div class="skills">
                <Link to="/contact"><button>Contact Us</button></Link>
                </div>
            </div>
        </section>
      )
    }
  }
  
  export default Footer;