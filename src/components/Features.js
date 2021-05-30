import React from "react";
import Facility from "../components/Facility";
import "../components/Features.css";
import "../components/Facility";
import img_1 from "../images/img-1.jpg";
import img_2 from "../images/img-2.jpg";
import img_3 from "../images/img-3.jpg";
import "./TestPeriod.css";

export default function Features() {
  return (
    <div className="features-wrapper" id="features">
      <div className="research checkup">
        <div class="research-bg">
          <Facility
            research_title="Research Facility"
            description_one="The research labs at our study sites use state-"
            description_two="of-the-art equipment operated by highly"
            description_three="qualified technicians."
            image={img_1}
          />
        </div>
      </div>

      <div className="monthly-checkup checkup checked">
        <div class="checkup-bg">
          <Facility
            research_title="Monthly Check-ups"
            description_one="The study conducts patient check-up every"
            description_two="third weekend of the month to keep track of"
            description_three="patient's health and recovery."
            image={img_2}
            alignRight="true"
          />
        </div>
      </div>

      <div className="home-checkup checkup">
        <div class="home-bg">
          <Facility
            research_title="In-home Check-ups"
            description_one="Eligible candidates can choose for in-home"
            description_two="consultation every month from our trained"
            description_three="study professionals."
            image={img_3}
          />
        </div>
      </div>
    </div>
  );
}
