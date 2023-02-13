import React from "react";
import { Row, Col } from "react-bootstrap";
import { Section } from "../components";
import { Github, Linkedin } from "react-bootstrap-icons";
import ContactConfig from "../data/contact.json";

const customContent = ContactConfig.customContent;

export class Contact extends React.Component {
  handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    svg: {
      margin: "0 50px",
    },
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
        <div style={this.styles.container}>
          <Github
            style={this.styles.svg}
            size={30}
            onClick={() => this.handleClick("https://github.com/ChenDavid66")}
          />
          <Linkedin
            style={this.styles.svg}
            size={30}
            onClick={() =>
              this.handleClick(
                "https://www.linkedin.com/in/david-wang-117921194/"
              )
            }
          />
        </div>
        <Row>
          <Col md={12}>
            <div className="mt-3 text-center">
              <a /* onClick={() => ()} */>dw.wang.pro@gmail.com</a>
            </div>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default Contact;
