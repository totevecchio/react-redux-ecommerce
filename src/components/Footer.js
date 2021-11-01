import React from "react";
import NavbarIcon from "./NavbarIcon";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaWhatsappSquare,
  FaCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="fixed bottom-0 left-0 m-0 flex flex-row bg-gray-900  
      text-white shadow-lg w-screen h-16"
    >
      <div
        className="left flex mb-0 mt-0 flex-row 
      text-white shadow-lg justify-end"
      >
        <NavbarIcon
          icon={<FaCopyright size="28" />}
           text={`Copyright © ${new Date().getFullYear()} All Rights Reserved`}
          path=""
          iconClassName='footer-icon-left'
          tooltipClassName="footer-copyright-tooltip"
        />
      </div>
      <div
        className="right m-0 flex mb-0 mt-0
      text-white shadow-lg w-screen flex-row h-16 justify-end" 
      >
        <NavbarIcon
          icon={<FaInstagram size="28" />}
          text="Instagram"
          path={{ pathname: "https://www.instagram.com/" }}
          target="blank"
          iconClassName='footer-icon-right'
          tooltipClassName='footer-tooltip'
        />
        <NavbarIcon
          icon={<FaLinkedin size="28" />}
          text="Linkedin"
          path={{ pathname: "https://www.linkedin.com/" }}
          target="blank"
          iconClassName='footer-icon-right'
          tooltipClassName='footer-tooltip'
        />
        <NavbarIcon
          icon={<FaFacebookSquare size="28" />}
          text="Facebook"
          path={{ pathname: "https://www.facebook.com/" }}
          target="blank"
          iconClassName='footer-icon-right'
          tooltipClassName='footer-tooltip'
        />
        <NavbarIcon
          icon={<FaWhatsappSquare size="28" />}
          text="Whatsapp"
          path={{
            pathname:
              "https://api.whatsapp.com/send/?phone=%2B5491158446157&text&app_absent=0",
          }}
          target="blank"
          iconClassName='footer-icon-right'
          tooltipClassName='footer-tooltip'
        />
      </div>
    </div>
  );
};

export default Footer;
