import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';

class Header extends Component {
  render() {
    return (
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-light">
              <Link className="navbar-brand" to="/">
                  <img src="images/Electro.png" alt="Bootstrap" width="200" height="50" class="d-inline-block align-top" />
              </Link>
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#toggleMobileMenu" 
                aria-controls="toggleMobileMenu" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="toggleMobileMenu">
                  <ul className="navbar-nav ms-auto text-center">
                      <li className="nav-li">
                          <Link className="nav-link" to="/">Home</Link>
                      </li>
                      <li>
                          <Link className="nav-link" to="/about">About</Link>
                      </li>
                      <li>
                          <Link className="nav-link" to="/contact">Contact</Link>
                      </li>
                  </ul>
                  <form>
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                  </form>
                  <a className="cart text-reset me-3" href="#!">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                  <div class="d-flex align-items-center">
                    <button type="button" class="login-button btn btn-primary me-3">
                      Login
                    </button>
                  </div>
              </div>
          </nav>
        </div>
    )
  }
}

export default Header;

