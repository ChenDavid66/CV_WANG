import React from "react";
import { Container } from "react-bootstrap";
import TextLoop from "react-text-loop";
import styled from "styled-components";
import { Scroller } from "../components";
import details from "../data/details.json";
import CardSwitch from "../components/CardSwitch";
const Dot = styled.div({
  color: "#ff4c60",
  display: "inline",
});

export class Home extends React.Component {
  render() {
    return (
      <section id="home" className="home d-flex align-items-center">
        <Container>
          <CardSwitch />
          <div className="intro">
            <h1 className="mb-2 mt-0">
              {details.firstName}
              <Dot>{details.middleName}</Dot>
              {details.lastName}
            </h1>

            <span>
              {`I'm a `}
              <TextLoop
                springConfig={{ stiffness: 180, damping: 10 }}
                interval={2000}
              >
                {details.titles.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </TextLoop>
            </span>

            <div className="mt-4">
              <Scroller href="#contact" className="btn btn-kd">
                Contact me
              </Scroller>
            </div>
          </div>
          <div className="scroll-down">
            <Scroller href="#about" className="mouse-wrapper">
              <span>Scroll Down</span>
              <span className="mouse">
                <span className="wheel" />
              </span>
            </Scroller>
          </div>
        </Container>
      </section>
    );
  }
}

export default Home;
