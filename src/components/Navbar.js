import React, { useEffect } from "react";
import Logo from "../images/logo.png";
import "../components/Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="header">
      <div class="bg-img">
        <div class="container">
          <nav className="navbar">
            <p className="logo">
              <img src={Logo} className="logo" alt="logo-img" />
              <a className="logo-link" href="/">
                iConnect
              </a>
            </p>
            <ul className="navbar_item_list">
              <li className="navbar_item">
                <a href="/#about">About</a>
              </li>
              <li className="navbar_item">
                <a href="/#faqs">FAQ</a>
              </li>
              <li className="navbar_item">
                <a href="/#features">Features</a>
              </li>
              <li className="navbar_item">
                <a href="/#journey">Journey</a>
              </li>
              <button className="button-eligible">Am I Eligible?</button>
            </ul>
          </nav>

          <div data-aos="fade-up" class="home-heading">
            <p data-aos="fade-in" className="text-center-1">
              A clinical research study for <br />
              people with myelodysplastic
              <br />
              syndromes with anemia.
            </p>

            <p data-aos="fade-up" className="text-center-2">
              The study is to compare the effectiveness of a study drug versus a
              standard-of
              <br />
              care therapy.Individuals will be evaluated to determine their
              eligibility to
              <br />
              participate.Each person who qualifies will receive either the
              study drug or
              <br />
              standard-of-care therapy, study-related medical exams, and
              study-related
              <br />
              laboratory tests at no cost.
            </p>
            <button className="button-eligible-2">Check my eligibility</button>
            <button className="learn-more-button">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
