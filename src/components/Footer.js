import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from 'react-icons/fa';
import {Button} from 'react-bootstrap';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return (
        <div className="footer">
          <div className="footer-center">
            <div className="left box">
              <h2> Social Media </h2>
              <div className="content">
                <p> Follow us for more updates!</p>
              </div>
              <div class="social">
                <a href="https://www.facebook.com/deepfrying-109553457489948/">
                  <span>
                    <FaFacebookF />
                  </span>
                </a>
                <a href="https://twitter.com/deep_frying">
                  <span>
                    <FaTwitter />
                  </span>
                </a>
                <a href="https://www.instagram.com/deep.frying/">
                  <span>
                    <FaInstagram />
                  </span>
                </a>
              </div>
            </div>
            <div class="center box">
              <h2> Address </h2>
              <div class="content">
                <div class="place">
                  <span class>
                    <FaMapMarkerAlt />
                  </span>
                  <span class="text">Antwerpen Belgium</span>
                </div>
                <div class="phone">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <span class="text">+32 493 71 29 78</span>
                </div>
                <div class="email">
                  <span>
                    <FaEnvelope />
                  </span>
                  <span class="text">deepfryingBE@gmail.com</span>
                </div>
              </div>
            </div>
            <div class="right box">
              <h2 id="Subscribe">Subscribe</h2>
              <div class="content">
                <form action="#">
                  <div class="email">
                    <div class="text">Sign up now to receive free recipes!</div>
                    <input type="email" required placeholder="Email Address" />
                  </div>
                  <Button size="md" variant="info" href="#">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <span class="credit">
              Created By{" "}
              <a href="https://www.linkedin.com/in/arlene-postrado-80b32a103/">
                Arlene Postrado
              </a>{" "}
              |{" "}
            </span>
            <span class="far fa-copyright"></span>
            <span> 2020 All rights reserved.</span>
          </div>
        </div>
  );
}

export default Footer;



