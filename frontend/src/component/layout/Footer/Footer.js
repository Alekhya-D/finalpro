import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>DreamFly</h1>
        <p>Providing the best mentoring is our dirst priority</p>

        <p>Copyrights 2022 &copy; teamDreamFly</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/teamdreamfly">Instagram</a>
        <a href="http://youtube.com/teamdreamfly">Youtube</a>
        <a href="http://instagram.com/teamdreamfly">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
