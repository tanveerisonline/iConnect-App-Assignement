import React from "react";
import "../components/Questions.css";
export default function Questions(props) {
  return (
    <div class="faqs" id="questions">
      <p className="faq-heading">{props.faq_heading}</p>
      <p className="faq-description">{props.faq_description}</p>
    </div>
  );
}
