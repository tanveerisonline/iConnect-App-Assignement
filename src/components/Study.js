import React, { useEffect } from "react";
import "../components/Study.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Study() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="text">
      <h3 data-aos="fade-up" className="text-center-3">
        Are blood transfusions holding you back?
      </h3>
      <p data-aos="fade-up" className="text-center-4">
        The purpose of the study is to compare the effectiveness of a study drug
        versus a standard-od-care therapy.
        <br />
        Individuals will be evaluated to determine their eligibility to
        participate.Each person who qualifies will receive
        <br />
        either the study drug or standard-of-care therapy, study-related medical
        exams, and study-related laboratory tests
        <br />
        at no cost.
      </p>
    </div>
  );
}
