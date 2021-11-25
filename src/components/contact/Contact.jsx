import React, {Component} from 'react';
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import 'jquery-validation/dist/jquery.validate.min.js'

class Contact extends Component {
  render() {
      $(document).ready(function() {
        $("#myForm").validate({
            rules: {
                name: {
                    required:true,
                    maxlength: 50
                },
                email_id: {
                    required:true,
                    maxlength:50
                },
                mobile: {
                    required:true,
                    maxlength:10
                },
                message: {
                    required:true,
                    maxlength:50
                },
            },
            messages: {
                name: "This is a required field",
                email_id: "This is a required field",
                mobile: "This is a required field",
                message: "This is a required field",
            },
            submitHandler: function(form) {
                form.submit();
            }
        })
      })
     return (
      <div>
        <div className="container">
          <div className="row">
              <h1>Contact Us</h1>
          </div>
          <div className="row">
              <h4>We'd love to hear from you!</h4>
          </div>
          <form method="POST" action="" enctype="multipart/form-data" id="myForm" name="myForm">
            <div className="row input-container">
              <div className="col-xs-12">
                <div className="styled-input wide">
                  <input type="text" name="name" id="name" required />
                  <label>Name</label> 
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="styled-input">
                  <input type="text" name="email_id" id="email_id" required />
                  <label>Email</label> 
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="styled-input">
                  <input type="text" name="mobile" id="mobile" required />
                  <label id="mobile-error">Phone Number</label> 
                </div>
              </div>
              <div className="col-xs-12">
                <div className="styled-input wide">
                  <textarea name="message" id="message" required></textarea>
                  <label>Message</label>
                </div>
              </div>
              <div className="col-xs-12">
                <button className="btn-lrg submit-btn">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;