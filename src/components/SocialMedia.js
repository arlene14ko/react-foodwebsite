import React from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaEnvelope,
  FaPrint,
} from "react-icons/fa";

export default function SocialMedia() {
    return (
        <div className="social">
            <a href="#"><span><FaFacebookSquare/></span></a>
            <a href="#"><span><FaTwitterSquare/></span></a>
            <a href="#"><span><FaInstagram/></span></a>
            <a href="#"><span><FaEnvelope/></span></a>
            <a href="#" onclick="window.print();return false;"><span><FaPrint/></span></a>
        </div>
    )
}
