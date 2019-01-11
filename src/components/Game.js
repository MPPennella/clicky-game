import React, { Component } from "react";
import GamePiece from "./GamePiece";
import shuffle from "lodash/shuffle";

class Game extends Component {
    state = {
        score: 0,
        guessed: [],
        gameOver: false
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

    // Controller for handling clicks on GamePieces
    gamePieceClickHandler = (event, data) => {
        // const {target} = event;
        const {name} = data;

        // Check if Piece has already been clicked
        if (this.state.guessed.includes(name)) {
            // If duplicate, loss state
            console.log("GUESSED");

            // Reset Score and Guessed list, set gameOver to true
            this.setState({
                score: 0,
                guessed: [],
                gameOver: true
            });
            
        } else {
            // If not duplicate, increase score and add clicked icon to guessed list
            console.log("NOT GUESSED")

            // Increase score and add clicked GamePiece to guessed list
            this.setState({
                score: this.state.score+1,
                guessed: this.state.guessed.concat(name),
                gameOver: false
            });
        }
    }

    // Creates a randomized array of GamePieces by shuffling the array of possible values
    renderPieces() {
        this.zodiacSigns = shuffle(this.zodiacSigns);
        console.log(this.zodiacSigns);

        return this.zodiacSigns.map( sign => <GamePiece key={sign} name={sign} clickHandler={this.gamePieceClickHandler} />)
    }

    // Controls the appearane of the Win/Loss message box
    renderMessageBox() {
        // If score is equals the number of guessable items, display victory message
        if (this.state.score === this.zodiacSigns.length) {
            return  <h1 className="gameTextArea">You got them all!</h1>
        } else if (this.state.gameOver === true) {
            return <h1 className="gameTextArea">You already guessed that! Try again!</h1>
        }
        // Return nothing if no conditions met
        return;
    }
  
    render() {
        return (
            <div className="container">
                <div className="scoreZone">
                    <h1 className="gameTextArea">Score: {this.state.score}</h1>
                </div>
                
                <div className="row gameBoard m-auto">
                    {this.renderPieces()}
                </div>

                {this.renderMessageBox()}
            </div>            
        );
    }
}

export default Game;
