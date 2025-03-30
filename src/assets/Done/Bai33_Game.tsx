import { useState } from "react";

import "./GameStyles.css";
import { caculateWinner } from "../../helper";
import Board from "../../components/tictactoe/Board";

function Game() {
  // Ở đây mình sẽ gom 2 nhóm state lại với nhau
  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
    name: "iFanIT", // giả sử như ở đây có thêm một state nữa
  });
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  // const winner = caculateWinner(board);
  const winnerInfo = caculateWinner(state.board);
  const winner = winnerInfo ? winnerInfo.winner : null; // nếu có ng thắng thì lấy ra winner
  const winningSquares = winnerInfo ? winnerInfo.winningSquares : []; // nếu lấy ra đc winner thì lấy ra mảng thắng

  const handleClick = (index: number) => {
    const boardCopy = [...state.board]; // copy ra và chỉnh sửa sau đó cập nhật
    if (winner || boardCopy[index]) return; // nếu win hoặc ô đã đánh boardCopy[index] = true -> ko bấm được nữa
    boardCopy[index] = state.xIsNext ? "X" : "O";
    // setBoard(boardCopy);
    // setXIsNext((xIsNext) => !xIsNext);

    // thật ra ở đây mình đang code TS nên setState mà không gán lại đầy đủ các phần tử trong object thì nó sẽ lỗi
    setState({
      ...state, // nên cần phải lấy lại (clone) object ở trên xuống và mình cập nhật 2 thuộc tính mới là được
      board: boardCopy,
      xIsNext: !state.xIsNext,
    });
  };

  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
    setState({
      ...state,
      board: Array(9).fill(null),
      xIsNext: true,
    });
  };
  return (
    <div>
      <Board
        cells={state.board}
        onClick={handleClick}
        winningSquares={winningSquares}
      ></Board>
      {winner && <div className="game-winner">{`Winner is ${winner}`}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
      {/* <h1>{winner ? `Winner is: ${xIsNext ? "O" : "X"}` : ""}</h1> */}
    </div>
  );
}

export default Game;

// FILE APP CHO GAME.TSX
// // import { useState } from "react";
// // import reactLogo from "./assets/react.svg";
// // import viteLogo from "/vite.svg";

// import "./App.css";
// import GameReducer from "./components/tictactoe/GameReducer";
// import Game from "./components/tictactoe/Game";

// function App() {
//   return (
//     <div>
//       {/* <Game></Game> */}
//       <GameReducer></GameReducer>
//     </div>
//   );
// }

// export default App;
