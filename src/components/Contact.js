import React from "react";
import "../components/Contact.css";

import FadeInSection from "../components/lib";
export default function Contact(props) {
  return (
    <div className="contact">
      <FadeInSection>
        <h4 className="contact-title">{props.contact_heading}</h4>
        <h4 className="email-address">{props.email}</h4>
        <p className="phone-no">{props.phone_no}</p>
        <p className="contact-no">{props.contact_no}</p>
        <p className="copyright">{props.copyright}</p>
      </FadeInSection>
    </div>
  );
}
