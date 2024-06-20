import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Previn Bogopa </span>
            from <span className="purple"> Kempton park, Johannesburg.</span>
            <br />
            I am currently free lancing and building personal projects as a software developer.
            <br />
            I am a Computer science student.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> attending hackerthons
            </li>
          </ul>

          <p style={{ color: "rgb(0, 112, 192)"}}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Previn</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
