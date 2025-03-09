import React from "react";
import { FaLinkedin, FaInstagram, FaXTwitter, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 border-t shadow-sm mt-5 text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold mb-2">ABOUT Duke'Table</h3>
          <ul className="text-gray-600 space-y-1">
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Work With Us</li>
            <li>Investor Relations</li>
            <li>Report Fraud</li>
            <li>Press Kit</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">FOR RESTAURANTS</h3>
          <ul className="text-gray-600 space-y-1">
            <li>Partner With Us</li>
            <li>Apps For You</li>
          </ul>
          <h3 className="text-lg font-bold mb-2 mt-4">LEARN MORE</h3>
          <ul className="text-gray-600 space-y-1">
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">SOCIAL LINKS</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a href="https://www.linkedin.com/in/vadnala-omkar/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-black text-2xl cursor-pointer" />
            </a>
            <FaInstagram className="text-black text-2xl cursor-pointer" />
            <FaXTwitter className="text-black text-2xl cursor-pointer" />
            <FaYoutube className="text-black text-2xl cursor-pointer" />
            <FaFacebook className="text-black text-2xl cursor-pointer" />
            <a href="https://wa.me/9347640227" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-500 text-2xl cursor-pointer" />
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Download_on_the_App_Store_Badge.svg/1920px-Download_on_the_App_Store_Badge.svg.png"
              alt="App Store"
              className="w-36 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1920px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              className="w-36 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="border-t mt-6 pt-4 text-center text-gray-600 text-sm">
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies.
        All trademarks are properties of their respective owners. 2008-2025 © Duke's Table™ Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
