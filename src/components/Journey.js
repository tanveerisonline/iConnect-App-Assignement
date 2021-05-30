import React from "react";
import "./Journey.css";
import "./TestPeriod";
import TestPeriod from "./TestPeriod";
import "./TestPeriod.css";

import FadeInSection from "../components/lib";
export default function Journey() {
  return (
    <div className="journey" id="journey">
      <h1 data-aos="fade-up" className="journey-title">
        Patient Journey
      </h1>

      <div data-aos="fade-up" className="journey-steps">
        <FadeInSection>
          <TestPeriod
            number="1"
            period_title="Check eligibility"
            period_description="Check your eligibility by taking up the eligibility test. if you are eligible, you can connect with the team at a study site of your choice."
          />
        </FadeInSection>

        <FadeInSection>
          <TestPeriod
            number="2"
            period_title="Screening Period"
            period_description="The team will connect with you and screen you with other preliminary tests. This can take up to 30-35 days which may be extended."
          />
        </FadeInSection>
        <FadeInSection>
          <TestPeriod
            number="3"
            period_title="Treatment Period"
            period_description="Eligibility candidates will receive initial treatment for up to 24 weeks during which the health, sleep and physical activities will be monitored."
          />
        </FadeInSection>
        <FadeInSection>
          <TestPeriod
            number="4"
            period_title="Follow-up Period"
            period_description="A follow-up period where you will be contacted approximately every 12 weeks to ask how you are doing."
            last_item="true"
          />
        </FadeInSection>
      </div>
    </div>
  );
}
