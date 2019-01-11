import React, { Component } from "react";
import GamePiece from "./GamePiece";
import shuffle from "lodash/shuffle";

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
        console.log(event.target);
        this.setState({score: this.state.score+1});
    }

    renderPieces() {
        this.zodiacSigns = shuffle(this.zodiacSigns);
        console.log(this.zodiacSigns);

        return this.zodiacSigns.map( sign => <GamePiece key={sign} name={sign} clickHandler={this.gamePieceClickHandler} />)
    }
  
    render() {
        return (
            <div className="container">
                <div className="scoreZone">
                    <h1>Score: {this.state.score}</h1>
                </div>
                
                <div className="row gameBoard m-auto">
                    {this.renderPieces()}
                </div>
            </div>
        );
    }
}

export default Game;
