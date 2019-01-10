import React, { Component } from "react";
import GamePiece from "./GamePiece";

class Game extends Component {
  state = {
    score: 0
  };

  
  render() {
    return (
      <div>
        <GamePiece name="Taurus" />
      </div>
    );
  }
}

export default Game;
