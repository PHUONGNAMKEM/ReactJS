import { useState } from "react";
// import "../../App.css";
import "./ToggleStyles.css";

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
  const [on, setOn] = useState(false); // hook useState này viết trên cùng - ko viết nó trong loop, dkien hay function

  const handleToggle = () => {
    setOn((on) => !on); // setOn(callback) -> setOn(prevState => !prevState)
    // dùng cách này sẽ đúng hơn vì nếu có 2 state thì nó sẽ theo cơ chế queue chờ cái này cập nhật xong -> lấy giá trị đó -> cập nhật cho state tiếp theo

    // dùng cách này sẽ sai vì nếu có 2 state thì nó sẽ chỉ lấy giá trị on mới nhất đầu vào và cập nhật cả 2 chỗ (trong khi nếu có 2 state thì ta muốn nó phải cập nhật 2 lần ms đúng => cách này sai)
    // setOn(!on);
  };

  return (
    <div>
      <div
        className={`toggle ${on ? "active" : ""}`}
        onClick={handleToggle}
        // onClick={() => setOn(!on)}
      >
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>

      <div className="toggle-control">
        {/* <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div> */}
      </div>
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
