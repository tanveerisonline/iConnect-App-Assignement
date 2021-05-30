import React, { useEffect } from "react";
import "../components/Facility.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Facility(props) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="facilities-wrapper">
      <div className="inside-wrap">
        <div
          data-aos="fade-up"
          className={"facility-body " + (props.alignRight ? "right" : "left")}
        >
          <h2 data-aos="fade-up" className="research-title">
            {props.research_title}
          </h2>
          <p data-aos="fade-up" className="research-description">
            {props.description_one}
          </p>
          <p data-aos="fade-up" className="research-description">
            {props.description_two}
          </p>
          <p data-aos="fade-up" className="research-description">
            {props.description_three}
          </p>
        </div>
        <div
          data-aos="fade-up"
          className={"image-div " + (props.alignRight ? "left" : "right")}
        >
          <img
            data-aos="fade-up"
            className="facility-image"
            alt="img-1"
            src={props.image}
          />
        </div>
      </div>
    </div>
  );
}
