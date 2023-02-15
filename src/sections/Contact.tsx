import React from "react";
import { Row, Col } from "react-bootstrap";
import { Section } from "../components";
import { Github, Linkedin } from "react-bootstrap-icons";
import ContactConfig from "../data/contact.json";
import "../scss/sections/contact.scss";
const customContent = ContactConfig.customContent;

export class Contact extends React.Component {
  handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  render() {
    return (
      <Section id="contact" title="Contact">
        <Row>
          <Col md={12}>
            <div className="mt-3 text-center" style={{ paddingBottom: "20px" }}>
              {customContent}
            </div>
          </Col>
        </Row>
        <div className="iconContainer">
          <Github
            className="github"
            size={25}
            onClick={() => this.handleClick("https://github.com/ChenDavid66")}
          />
          <Linkedin
            className="linkedin"
            size={25}
            onClick={() =>
              this.handleClick(
                "https://www.linkedin.com/in/david-wang-117921194/"
              )
            }
          />
        </div>
        <Row>
          <Col md={12}>
            <div className="loading-text">
              <h1 /* onClick={() => ()} */>dw.wang.pro@gmail.com</h1>
            </div>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default Contact;
