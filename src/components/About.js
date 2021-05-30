import React, { useEffect } from "react";
import Card from "../components/Card";
import "../components/About.css";
import "./Card.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="about-container" id="about">
      <h2 data-aos="fade-up" className="heading">
        About the study
      </h2>
      <p data-aos="fade-up" className="heading-description">
        Here are some key highlights of our study
      </p>
      <Card
        title="Eligibility"
        description="18 years or older participants with symptoms of MDS or"
        descriptions=" anaemia."
      />
      <Card
        title="Monthly Check-ups"
        description="A check-up every third weekend of the month to keep "
        descriptions="track of patient's health and recovery."
      />
      <Card
        title="Treatment Period"
        description="The total treatment period of this study is about 20-24"
        descriptions=" weeks."
      />
      <Card
        title="Compensation"
        description="Participants might reveive up to $300 for taking part in"
        descriptions=" the study."
      />
    </div>
  );
}
