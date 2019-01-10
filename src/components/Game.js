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

    gamePieceClickHandler = (event) => {
        console.log(event.target)
    }

    renderPieces() {
        return this.zodiacSigns.map( sign => <GamePiece key={sign} name={sign} clickHandler={this.gamePieceClickHandler} />)
    }
  
    render() {
        return (
            <div className="row game">
                {this.renderPieces()}
            </div>
        );
    }
}

export default Game;
