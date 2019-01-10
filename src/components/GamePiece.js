import React from "react";

function GamePiece(props) {
    return (
        <div>
            <img src={require(`../assets/${props.name}.jpg`)} alt={props.name} />
        </div>
    );
}

export default GamePiece;
