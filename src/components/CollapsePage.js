import React from "react";
import "../components/CollapsePage.css";
import Questions from "./Questions";
import "./Questions.css";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";

import FadeInSection from "../components/lib";
export default function CollapsePage() {
  return (
    <div className="accordion" id="faqs">
      <FadeInSection>
        <h1 class="accordion-title">Frequently asked questions</h1>

        <Accordion className="accordion-outside" defaultActiveKey="0">
          <Card className="accordion-body custom-card custom-carat">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <Questions
                className="Question-title"
                faq_heading="What do i have to do in the study?"
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="custom-card-body">
                <Questions
                  className="answer"
                  faq_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="accordion-body custom-card custom-carat">
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <Questions faq_heading="What do i have to do in the study?" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="custom-card-body">
                <Questions faq_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="accordion-body custom-card custom-carat">
            <Accordion.Toggle as={Card.Header} eventKey="2">
              <Questions faq_heading="What do i have to do in the study?" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="custom-card-body">
                <Questions faq_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="accordion-body custom-card custom-carat">
            <Accordion.Toggle as={Card.Header} eventKey="3">
              <Questions faq_heading="What do i have to do in the study?" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="custom-card-body">
                <Questions faq_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </FadeInSection>
    </div>
  );
}
