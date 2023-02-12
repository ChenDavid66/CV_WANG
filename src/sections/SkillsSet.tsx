import React from "react";
import { Section, ServiceBox } from "../components";
import { Row, Col } from "react-bootstrap";
import SkillsConfig from "../data/skills.json";
/* import Pulse from "react-reveal/Pulse"; */

const skillsset = SkillsConfig.skillsset;

export class ProgSkillsAndTech extends React.Component {
  render() {
    return (
      <Section id="skillsset" title="Main Programming Skills and Technologies">
        <Row>
          {skillsset.map((s) => (
            <Col md={4} key={s.title}>
              {/*   <Pulse delay={s.delay}> */}
              <ServiceBox
                title={s.title}
                image={s.photo}
                backgroundColor={s.backgroundColor}
              >
                <div
                  className="mb-0"
                  dangerouslySetInnerHTML={{ __html: s.content }}
                />
              </ServiceBox>
              {/*  </Pulse> */}
            </Col>
          ))}
        </Row>
        <Row>
          <Col md={12}>
            <div className="mt-3 text-center">
              <div
                className="mb-0"
                dangerouslySetInnerHTML={{
                  __html: SkillsConfig.customContent,
                }}
              />
            </div>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default ProgSkillsAndTech;
