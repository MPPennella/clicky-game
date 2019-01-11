import React from "react";

function GamePiece(props) {
    const name = props.name;
    return (
        <div className="col-3" onClick={event => props.clickHandler(event, {name: name})}>
            <img className="gamePieceImg" src={require(`../assets/${name}.jpg`)} alt={name} />
        </div>
    );
}

export default GamePiece;
