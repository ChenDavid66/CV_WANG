import React, { Component, useState } from "react";
import { Github, Linkedin } from "react-bootstrap-icons";

interface CardData {
  image: string;
  text: string;
}

const cardData: CardData[] = [
  {
    image: "https://example.com/image1.jpg",
    text: "Card 1 text",
  },
  {
    image: "https://example.com/image2.jpg",
    text: "Card 2 text",
  },
  {
    image: "https://example.com/image3.jpg",
    text: "Card 3 text",
  },
];

interface CardSwitchState {
  activeCardIndex: number;
}

class CardSwitch extends Component<{}, CardSwitchState> {
  constructor(props: {}) {
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

    return (
      <div>
        <div>
          {cardData.map((card, index) => (
            <div
              key={index}
              onClick={() => this.handleCardClick(index)}
              style={{
                display: "inline-block",
                padding: "10px",
                border:
                  activeCardIndex === index
                    ? "2px solid blue"
                    : "2px solid gray",
                borderRadius: "5px",
                margin: "10px",
                cursor: "pointer",
              }}
            >
              <img src={card.image} alt={card.text} style={{ width: "100%" }} />
              <p style={{ textAlign: "center" }}>{card.text}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Github className="github" size={25} />
          <Linkedin className="linkedin" size={25} />
        </div>
      </div>
    );
  }
}

export default CardSwitch;
