import React from "react";

function GamePiece(props) {
    return (
        <div className="col-3">
            <img className="gamePieceImg" src={require(`../assets/${props.name}.jpg`)} alt={props.name} />
        </div>
    );
}

export default GamePiece;
