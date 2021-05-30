import React from "react";
import "../components/Eligible.css";

import FadeInSection from "../components/lib";
export default function Eligible() {
  return (
    <div className="answering">
      <FadeInSection>
        <h2 className="eligible-heading">
          Let's find out if you are eligible for this study.
        </h2>
        <br />
        <p className="para">
          Take up this questionnaire to help us determine if you are have
          symptoms that are common for MDS
        </p>
        <p className="para">
          and anemia.if you have the common symptoms, you may be eligible to
          take part in the study.
        </p>
        <button className="btn-answer">Start answering</button>
      </FadeInSection>
    </div>
  );
}
