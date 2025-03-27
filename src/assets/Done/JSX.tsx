// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// ========================================================
// ========================================================
// ========================================================
// ========================================================
// ========================================================

// SESSON JSX

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

function App() {
  function getFullName(greeting: string, firstName: string, lastName: string) {
    return ` ${greeting} ${firstName} ${lastName}`;
  }

  const name = "iFanIT";
  const aboutMe =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maxime aspernatur fugit assumenda consequuntur rem nobis optio id? Ratione qui odio placeat quidem a assumenda voluptatibus accusantium? Qui, maiores asperiores?";
  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello {name}</h1>
      <p>Description: {aboutMe}</p>
      <h4>Exactly: Hello {name === "iFanIT" ? name : "World"}</h4>

      <h2>{getFullName("My name is: ", "Phuong Nam", "iFanIT")}</h2>

      <div className="future">
        <img className="future-image logo" src={viteLogo} alt="" />
        <h3 className="future-title">Triage</h3>
        <p className="future-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          consectetur sunt neque itaque, exercitationem veniam quisquam culpa
          porro incidunt suscipit
        </p>
      </div>
    </div>
  );
}

export default App;
