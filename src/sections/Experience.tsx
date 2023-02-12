import React from "react";
import { Row, Col } from "react-bootstrap";
import { Section, Timeline } from "../components";
import history from "../data/history.json";

const career = history.career;

export class Experience extends React.Component {
  render() {
    return (
      <Section id="experience" title="Experience">
        <Row>
          <Col md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {career.map((c) => (
                <Timeline
                  key={c.company}
                  time={c.period}
                  titleLink={c.link}
                  title={c.title}
                  /* icon={["fas", "briefcase"]} */
                  left="-7px"
                >
                  <p>{c.company}</p>
                  <div>
                    <ul>
                      {c.descriptions.map((description, index) => (
                        <li key={index}>{description.description}</li>
                      ))}
                    </ul>
                  </div>
                </Timeline>
              ))}

              <span className="line" />
            </div>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default Experience;
