import React, { Component } from "react";
import GamePiece from "./GamePiece";
import shuffle from "lodash/shuffle";

class Game extends Component {
    state = {
        score: 0,
        guessed: []
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

    gamePieceClickHandler = (event, data) => {
        // const {target} = event;
        const {name} = data;

        // Check if Piece has already been clicked
        if (this.state.guessed.includes(name)) {
            // If duplicate, loss state
            console.log("GUESSED");
            this.setState({
                score: 0,
                guessed: []
            });
            
        } else {
            // If not duplicate, increase score
            console.log("NOT GUESSED")
            this.setState({
                score: this.state.score+1,
                guessed: this.state.guessed.concat(name)
            });
        }
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
