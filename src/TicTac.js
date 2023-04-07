import React, { useState } from "react";
import { ButtonGroup, Button } from "@mui/material";

export default function TicTac() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isTurn, setTurn] = useState(true);
  function handleClick(i) {
    const copyState = [...square];
    copyState[i] = isTurn ? "X" : "O";
    setSquare(copyState);
    setTurn(!isTurn);
  }
  function checkWinner() {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (square[a] === square[b] && square[b] === square[c]) {
        return square[a];
      }
    }

    return false;
  }
  const isWinner = checkWinner();
  function handleRestart() {
    setSquare(Array(9).fill(null));
  }
  return (
    <div>
      {isWinner ? alert(`${isWinner} won the game`) : false}
      <div>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            style={{ color: "white", fontSize: "50px" }}
            className="square"
            onClick={() => handleClick(0)}
          >
            {square[0]}
          </Button>
          <Button
            style={{ color: "white", fontSize: "50px" }}
            className="square"
            onClick={() => handleClick(1)}
          >
            {square[1]}
          </Button>
          <Button
            style={{ color: "white", fontSize: "50px" }}
            className="square"
            onClick={() => handleClick(2)}
          >
            {square[2]}
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            style={{ color: "white", fontSize: "50px" }}
            className="square"
            onClick={() => handleClick(3)}
          >
            {square[3]}
          </Button>
          <Button
            style={{ color: "white", fontSize: "50px" }}
            className="square"
            onClick={() => handleClick(4)}
          >
            {square[4]}
          </Button>
          <Button
            style={{ color: "white", fontSize: "50px" }}
            className="square"
            onClick={() => handleClick(5)}
          >
            {square[5]}
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            style={{ color: "white", fontSize: "50px" }}
            className="square"
            onClick={() => handleClick(6)}
          >
            {square[6]}
          </Button>
          <Button
            style={{ color: "white", fontSize: "50px" }}
            className="square"
            onClick={() => handleClick(7)}
          >
            {square[7]}
          </Button>
          <Button
            style={{ color: "white", fontSize: "50px" }}
            className="square"
            onClick={() => handleClick(8)}
          >
            {square[8]}
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <Button onClick={handleRestart}>Play Again</Button>
      </div>
    </div>
  );
}
