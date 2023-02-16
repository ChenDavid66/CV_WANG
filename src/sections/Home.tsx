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
  description = (
    <div className="intro">
      <h1 className="mb-2 mt-0">WELCOME</h1>

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
      <span>
        content measurement, and audience insights, as well as to develop and
        improve products. With your permission we and our partners may use
        precise geolocation data and identification through device scanning. You
        may click to consent to our and our partners’ processing as described
        above. Alternatively you may access more detailed information and change
        your preferences before consenting or to refuse consenting. Please note
        that some processing of your personal data may not require your consent,
        but you have a right to object to such processing. Your preferences will
        apply to this website only. You can change your preferences at any time
        by returning to this site or visit our privacy policy.
      </span>
      <div className="mt-4">
        <Scroller href="#contact" className="btn btn-kd">
          Contact me
        </Scroller>
      </div>
    </div>
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
