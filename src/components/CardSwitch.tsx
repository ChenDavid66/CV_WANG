import React, { Component, useState } from "react";
import { Github, ArrowDownRightSquare } from "react-bootstrap-icons";
import "../scss/sections/cardSwitch.scss";

interface CardData {
  id: number;
  image: string;
  text: string;
  title: string;
  url: string;
  gitHubUrl: string;
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
    url: "https://www.hostinger.fr/tutoriels/portfolio-developpeur-web",
    gitHubUrl: "https://github.com/ChenDavid66",
  },
  {
    id: 2,
    image: "./images/manayaki.PNG",
    text: "Card 2 text",
    title: "Manayaki",
    url: "https://www.manayaki.fr/",
    gitHubUrl: "https://github.com/ChenDavid66",
  },
  {
    id: 3,
    image: "./images/comingSoon.jpg",
    text: "Card 2 text",
    title: "Coming",
    url: "https://www.manayaki.fr/",
    gitHubUrl: "https://github.com/ChenDavid66",
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

  handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  render() {
    const { activeCardIndex } = this.state;
    const filteredCardData = cardData.find(
      (card) => card.id === activeCardIndex
    ) ?? {
      id: 0,
      image: "",
      text: "",
      title: "Default Card",
      gitHubUrl: "",
      url: "",
    };
    return (
      <div className="card-switch-container">
        {activeCardIndex === 0 ? (
          <div className="description">{this.props.description}</div>
        ) : (
          <div className="description">
            <div className="card">
              <a href={filteredCardData.image} className="card-link">
                <img
                  src={filteredCardData.image}
                  alt="Link to Example Website"
                />
              </a>
              <div className="card-content">
                <h3>{filteredCardData.title}</h3>
                <p className="card-text">{filteredCardData.text}</p>

                <div className="card-footer">
                  <div className="card-footer-links">
                    <Github
                      size={25}
                      onClick={() =>
                        this.handleClick(filteredCardData.gitHubUrl)
                      }
                    />
                  </div>
                  <div className="card-footer-links">
                    <ArrowDownRightSquare
                      onClick={() => this.handleClick(filteredCardData.url)}
                      size={25}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="project-list">
          <ul>
            {cardData.map((card, index) => (
              <li>
                <a key={index} onClick={() => this.handleCardClick(index + 1)}>
                  <p className="card-text">{card.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CardSwitch;
