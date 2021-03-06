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

const pCode = {
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

const App = () => (
  <div className="App">
    <Board />
  </div>
);

const Board = () => {
  useEffect(() => {
    // fit game to fill viewport
    function handleResize() {
      let game = document.getElementById("board-container").style;
      let units = window.innerWidth > window.innerHeight ? "vh" : "vw";
      game.height = game.width = "90" + units;
      game.fontSize = "10.34" + units;
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const colorTile = n => (n % 2 ^ ((n / 8) % 2 < 1) ? " board-color" : "");

  return (
    <div id="board-container">
      <div className="board">
        {board.split("").map((p, i) => (
          <div className={"tile" + colorTile(i)} key={i}>
            {pCode[p]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
