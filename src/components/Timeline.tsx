import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

interface Props {
  time: string;
  title: string;
  icon: JSX.Element;
  left?: string;
  children: React.ReactNode;
  titleLink: string;
}

export class Timeline extends React.Component<Props> {
  render() {
    const props = this.props;

    const IconBox = styled.div({
      background: "#fff",
      fontSize: "24px",
      color: "#6610f2",
      position: "absolute",
      left: this.props.left ? this.props.left : "-10px",
      top: 0,
      zIndex: 1,
      fontWeight: 900,
    });

    return (
      <div className="timeline-container">
        <Fade bottom>
          <div className="content">
            <span className="time">{this.props.time}</span>
            <h3 className="title">
              <a
                href={this.props.titleLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.title}
              </a>
            </h3>
            {this.props.children}
          </div>
        </Fade>
        <IconBox>{props.icon}</IconBox>
      </div>
    );
  }
}

export default Timeline;
