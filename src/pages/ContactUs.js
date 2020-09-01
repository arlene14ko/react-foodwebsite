import React from 'react';
import { Button} from 'react-bootstrap';
import { BiMessageDetail } from "react-icons/bi";
import style from './contactus.css';

export default function ContactUs() {
    return (
      <div className="contactus">
        <div className="wrapper">
          <form action="https://formspree.io/meqrbrvj" method="POST">
            <div className="title">
              <h1>
                Contact Us <BiMessageDetail />
              </h1>
            </div>
            <div className="contact-form">
              <div className="input-fields">
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  name ="name"
                  required
                />
                <input
                  type="text"
                  className="input"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <input type="text" className="input" name="phone" placeholder="Phone" />
                <input
                  type="text"
                  className="input"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="msg">
                <textarea placeholder="Message" name="message" required></textarea>
                <button type="submit" className="btn">
                    Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );

}
