import React, { useEffect } from "react";
import "./styles.css";

let board =
  "RNBQKBNR" +
  "PPPPPPPP" +
  "        " +
  "        " +
  "        " +
  "        " +
  "pppppppp" +
  "rnbqkbnr";

let pieceCode = {
  R: "♜",
  N: "♞",
  B: "♝",
  Q: "♛",
  K: "♚",
  P: "♟",
  r: "♖",
  n: "♘",
  b: "♗",
  q: "♕",
  k: "♔",
  p: "♙",
  " ": " "
};

const App = () => {
  return (
    <div className="App">
      <Board />
    </div>
  );
};

const Board = () => {
  let toggle = true;

  useEffect(() => {
    // fit game to fill viewport
    function handleResize() {
      let game = document.getElementById("board-container").style;
      let units = window.innerWidth > window.innerHeight ? "vh" : "vw";
      game.height = game.width = "96" + units;
      game.fontSize = "10.34" + units;
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const colorTile = n => {
    toggle = n % 8 !== 0 ? !toggle : toggle;
    return toggle ? " board-color" : "";
  };

  return (
    <div id="board-container">
      <div className="board">
        {board.split("").map((p, i) => (
          <div className={"tile" + colorTile(i)} key={i}>
            {pieceCode[p]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
