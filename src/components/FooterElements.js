import React from "react";
import "./FooterElements.css";

import FadeInSection from "../components/lib";
export default function FooterElements(props) {
  return (
    <div className="main-wrapper">
      <div className="element-wrapper">
        <FadeInSection>
          <div className="address-title">
            <h4 className="footer-address">{props.address}</h4>
            <p className="footer-detail">{props.detail}</p>
            <p className="footer-details">{props.details}</p>
          </div>

          <div className="footer-links">
            <h4 className="link-title">{props.link_title}</h4>
            <a href="$" className="link-name">
              {props.link_name}
            </a>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
