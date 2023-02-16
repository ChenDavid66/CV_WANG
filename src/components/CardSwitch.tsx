import React, { Component, useState } from "react";
import { Github, Linkedin } from "react-bootstrap-icons";
import "../scss/sections/cardSwitch.scss";

interface CardData {
  id: number;
  image: string;
  text: string;
  title: string;
}

interface CardSwitchProps {
  description: JSX.Element;
}

interface CardSwitchState {
  activeCardIndex: number;
}
const cardData: CardData[] = [
  {
    id: 1,
    image: "./images/vortex.jpg",
    text: "Card 1 text",
    title: "VvortexX",
  },
  {
    id: 2,
    image: "./images/manayaki.PNG",
    text: "Card 2 text",
    title: "Manayaki",
  },
  {
    id: 3,
    image: "./images/comingSoon.jpg",
    text: "Card 2 text",
    title: "Coming",
  },
];
class CardSwitch extends Component<CardSwitchProps, CardSwitchState> {
  constructor(props: CardSwitchProps) {
    super(props);

    this.state = {
      activeCardIndex: 0,
    };
  }

  handleCardClick = (index: number) => {
    this.setState({ activeCardIndex: index });
  };

  render() {
    const { activeCardIndex } = this.state;
    const filteredCardData = cardData.filter(
      (card) => card.id === activeCardIndex
    );
    return (
      <div className="card-switch-container">
        {activeCardIndex === 0 ? (
          <div className="description">{this.props.description}</div>
        ) : (
          <div className="description">
            <div className="card-list">
              {filteredCardData.map((card, index) => (
                <div
                  key={index}
                  onClick={() => this.handleCardClick(index)}
                  className={
                    activeCardIndex === index
                      ? "card-list-item-active"
                      : "card-list-item"
                  }
                >
                  <div className="card">
                    <img
                      src={card.image}
                      alt={card.text}
                      className="card-image"
                    />
                    <p className="card-text">{card.text}</p>
                    <div className="card-social-links">
                      <Github className="github" size={25} />
                      <Linkedin className="linkedin" size={25} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="project-list">
          {cardData.map((card, index) => (
            <a key={index} onClick={() => this.handleCardClick(index + 1)}>
              <p className="card-text">{card.title}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default CardSwitch;
