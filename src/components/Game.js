import React, { Component } from "react";
import GamePiece from "./GamePiece";

class Game extends Component {
    state = {
        score: 0
    };

    zodiacSigns = [
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn",
        "Aquarius",
        "Pisces"
    ]

    renderPieces() {
        return this.zodiacSigns.map( sign => <GamePiece name={sign} />)
    }
  
    render() {
        return (
            <div>
                {this.renderPieces()}
            </div>
        );
    }
}

export default Game;
