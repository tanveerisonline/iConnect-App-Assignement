import React from "react";
import "../components/Footer.css";
import "../components/FooterElements";
import FooterElements from "./FooterElements";

import FadeInSection from "../components/lib";
export default function Footer() {
  return (
    <div className="container-footer">
      <FadeInSection>
        <div class="title-address">
          <FooterElements
            address="Address"
            detail="350 5th Ave, New York NW,"
            details="10118, USA"
          />
        </div>
      </FadeInSection>
      <div className="links">
        <FadeInSection>
          <FooterElements link_title="Links" link_name="About" />
          <FooterElements link_name="FAQ" />
          <FooterElements link_name="Eligibility" />
          <FooterElements link_name="Features" />
          <FooterElements link_name="Journey" />
        </FadeInSection>
      </div>
    </div>
  );
}
