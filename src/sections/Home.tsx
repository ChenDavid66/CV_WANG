import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Scroller } from "../components";
import home from "../data/home.json";
import CardSwitch from "../components/CardSwitch";
const Dot = styled.div({
  color: "#ff4c60",
  display: "inline",
});

export class Home extends React.Component {
  description = (
    <>
      <h1>{home.welcome}</h1>
      <span>{home.content}</span>
      <div className="mt-4">
        <Scroller href="#contact" className="btn btn-kd">
          {home.contact}
        </Scroller>
        <Scroller href="#contact" className="btn btn-kd">
          {home.resume}
        </Scroller>
      </div>
    </>
  );
  render() {
    return (
      <section id="home" className="home d-flex align-items-center">
        <Container>
          <CardSwitch description={this.description} />
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
