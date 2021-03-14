import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a
        className="footer__heading"
        href="https://ec2-13-126-199-44.ap-south-1.compute.amazonaws.com/"
        target="_blank"
        rel="noreferrer"
      >
        Quinstinct Advisory Private Limited
      </a>
      <h4 className="footer__info">Niche Business Center</h4>
      <h4 className="footer__info">10, 2nd Avenue Harringron Road, Chennai</h4>
      <h4 className="footer__info">Tamilnadu - 600031</h4>
      <h4 className="footer__info">Email: info@quinstinct.com</h4>
      <h4 className="footer__info">
        <span>&#169;</span> Quinstinct Advisory Private Limited
      </h4>
    </div>
  );
}

export default Footer;
