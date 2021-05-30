import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Card(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="wrapper">
      <div className="side-cards">
        <div data-aos="fade-up" className="card-body">
          <h2 data-aos="fade-up" className="card-title">
            {props.title}
          </h2>
          <p data-aos="fade-up" className="card-description">
            {props.description}
          </p>
          <p data-aos="fade-up" className="card-description descrip">
            {props.descriptions}
          </p>
        </div>
      </div>
    </div>
  );
}
