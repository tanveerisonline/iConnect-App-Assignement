import React from "react";
import "../components/Forms.css";
import { Button, Form } from "react-bootstrap";
import FadeInSection from "../components/lib";

export default function Forms() {
  return (
    <div className="form">
      <div className="form-bg">
        <FadeInSection>
          <h2 className="question">Got a question?</h2>
          <div className="div-form">
            <Form />
            <input type="text" className="name" placeholder="Name" />
            <input type="text" className="name" placeholder="E-mail" />
            <p className="text-area">
              <textarea
                id="message"
                className="subject"
                placeholder="  Question"
              ></textarea>
            </p>
            <Button className="btn btn-danger">Send message</Button>
            <Form />
          </div>
        </FadeInSection>{" "}
      </div>
    </div>
  );
}
