import { useReducer, useState } from "react";

import "./GameStyles.css";
import Board from "./Board";
import { caculateWinner } from "../../helper";

// khởi tạo các state sẽ sử dụng
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

// Type cho state:
interface GameState {
  board: (string | null)[];
  xIsNext: boolean;
}

// Type cho action
type GameAction =
  | { type: "CLICK"; payload: { index: number; winner: string | null } }
  | { type: "RESET" };

const gameReducer = (state: GameState, action: GameAction) => {
  switch (action.type) {
    case "CLICK": {
      const { index, winner } = action.payload;
      const { board, xIsNext } = state;
      if (winner || board[index]) return state;

      const nextState = JSON.parse(JSON.stringify(state)); // clone ra 1 state mới
      // cách hđ: đầu tiên stringify sẽ nhận state và cho ra kq: '{"board":[null,"X"],"xIsNext":true}'
      // tiếp theo nó sẽ parse ra 1 object: board: [null, "X"], xIsNext: true
      // ko dùng ...state vì nếu object của chúng ta phức tạp hơn thì nó sẽ không còn clone chính xác nữa
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESET": {
      return {
        board: Array(9).fill(null),
        xIsNext: true,
      };
    }

    default:
      break;
  }
  return state;
};

function GameReducer() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const action = {type: 'CLICK', payload: {}}

  // Ở đây mình sẽ gom 2 nhóm state lại với nhau
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  //   name: "iFanIT", // giả sử như ở đây có thêm một state nữa
  // });

  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  // const winner = caculateWinner(board);
  const winnerInfo = caculateWinner(state.board);
  const winner = winnerInfo ? winnerInfo.winner : null; // nếu có ng thắng thì lấy ra winner
  const winningSquares = winnerInfo ? winnerInfo.winningSquares : []; // nếu lấy ra đc winner thì lấy ra mảng thắng

  const handleClick = (index: number) => {
    // const boardCopy = [...state.board]; // copy ra và chỉnh sửa sau đó cập nhật
    // if (winner || boardCopy[index]) return; // nếu win hoặc ô đã đánh boardCopy[index] = true -> ko bấm được nữa
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // setBoard(boardCopy);
    // setXIsNext((xIsNext) => !xIsNext);

    // thật ra ở đây mình đang code TS nên setState mà không gán lại đầy đủ các phần tử trong object thì nó sẽ lỗi
    // setState({
    //   ...state, // nên cần phải lấy lại (clone) object ở trên xuống và mình cập nhật 2 thuộc tính mới là được
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext,
    // });
  };

  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
    // setState({
    //   ...state,
    //   board: Array(9).fill(null),
    //   xIsNext: true,
    // });
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

export default GameReducer;
