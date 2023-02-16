import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { /* Skill, Counter, */ Section } from "../components";
/* import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core' */
import about from "../data/about.json";

const Name = styled.div`
  font-weight: 500;
  font-size: 18px;
`;
export class About extends React.Component {
  render() {
    return (
      <Section id="about" title="About Me">
        <Row>
          <Col
            md={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={"images/MYbgpicCartoon.png"}
              alt="Profile Picture"
              style={{ width: "150px", borderRadius: "5%" }}
            />
          </Col>
          <Col md={10} className="triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <Row>
                <Col>
                  <div dangerouslySetInnerHTML={{ __html: about.objective }} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default About;
