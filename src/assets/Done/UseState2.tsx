import { useState } from "react";
import "../../App.css";

// // stateless functional component: functional component nhưng không sử dụng state
// function Toggle() {
//   return <div className="toggle"></div>;
// }
// // stateful functional component: functional component có sử dụng state
// function Toggle2() {
//   const [count, setCount] = useState();
//   return <div className="toggle"></div>;
// }

function Toogle() {
  /**
   * 1. enabling state: useState(initialize value)
   * 2. initialize state: useState(false)
   * 3. reading state
   * 4. update state
   */
  const [on, setOn] = useState(false);

  return (
    <div className="toggle" onClick={() => setOn(!on)}>
      {on ? (
        <button style={{ width: "500px" }}>
          <h1 style={{ color: "green" }}>Your click!</h1>
        </button>
      ) : (
        <button style={{ width: "500px" }}>
          <h1 style={{ color: "red" }}>Red</h1>
        </button>
      )}
    </div>
  );
}

export default Toogle;

// import { useState } from "react";

// function Toggle() {
//   const [currentValue, functionToChangeValue] = useState(false);
//   console.log(">>> check current value: ", currentValue);
//   console.log(">>> check function: ", functionToChangeValue);
//   return (
//     <div className="toggle">
//       <button onClick={() => functionToChangeValue(!currentValue)}>
//         {currentValue ? "Bật" : "Tắt"}
//       </button>
//     </div>
//   );
// }

// export default Toggle;
