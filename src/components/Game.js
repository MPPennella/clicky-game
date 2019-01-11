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

    maxScore = this.zodiacSigns.length;

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

            let newScore = !this.state.gameOver ? this.state.score+1 : 1;

            // Increase score and add clicked GamePiece to guessed list
            this.setState({
                score: newScore, // this.state.score+1,
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
        // Check that a gameOver state is true
        if (this.state.gameOver === true){
            // Victory message if score equals number of GamePieces, defeat if not
            let message = (this.state.score === this.maxScore) ? "You got them all!" : "You already guessed that! Try again!";
            return <h1 className="gameTextArea">{message}</h1>
        }
        // Return nothing if no conditions met
        return;
    }

    componentDidUpdate () {
        // Check for victory condition and setState accordingly if true
        if (this.state.score === this.maxScore && this.state.gameOver === false) this.setState({
            gameOver: true,
            guessed: []
        })
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
