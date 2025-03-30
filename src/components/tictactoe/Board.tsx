// import { caculateWinner } from "../../helper";
// import Cell from "./Cell";

// interface BoardProps {
//   cells: (string | null)[];
//   onClick: (index: number) => void;
// }

// function Board(props: BoardProps) {
//   console.log(props);
//   //Array(9).fill() -> <div undefined="" x="" 9=""></div>

//   const cells = [null, null, null, "X", "X", "X", null, null, null];
//   console.log(caculateWinner(cells));
//   return (
//     <div className="game-board">
//       {props.cells.map((item, index) => (
//         <Cell
//           key={index}
//           value={item}
//           onClick={() => props.onClick(index)}
//         ></Cell>
//       ))}
//     </div>
//   );
// }

// export default Board;

import { caculateWinner } from "../../helper";
import Cell from "./Cell";

interface BoardProps {
  cells: (string | null)[];
  onClick: (index: number) => void;
  winningSquares: number[];
}

function Board(props: BoardProps) {
  return (
    <div className="game-board">
      {props.cells.map((item, index) => {
        const isWinningSquare = props.winningSquares.includes(index);
        return (
          <Cell
            key={index}
            value={item}
            // className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
            className={`${item === "X" ? "is-x" : item === "O" ? "is-o" : ""} ${
              isWinningSquare ? "winning" : ""
            }`}
            onClick={() => props.onClick(index)}
          ></Cell>
        );
      })}
    </div>
  );
}

export default Board;
