import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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

function Feature() {
  return (
    <div className="future">
      <img className="future-image logo" src={viteLogo} alt="" />
      <h3 className="future-title">Triage</h3>
      <p className="future-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        consectetur sunt neque itaque, exercitationem veniam quisquam culpa
        porro incidunt suscipit
      </p>
    </div>
  );
}

interface YoutubeItemProps {
  image: string;
  avatar: string;
  title: string;
  author?: string;
}

function YoutubeItem(props: YoutubeItemProps) {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img
          src={props.avatar}
          alt=""
          className="youtube-avatar"
          // style={{
          //   width: "70px",
          //   height: "70px",
          //   borderRadius: "35px",
          //   float: "left",
          //   objectFit: "cover",
          // }}
        />

        <div className="youtube-info">
          <h3 className="youtube-title">{props.title}</h3>
          <h4 className="youtube-author">
            {props.author ? props.author : "Vo danh"}
          </h4>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="youtube-list">
      {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}
      <YoutubeItem
        image="https://images.unsplash.com/photo-1742268350465-35d7baae61fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
        author="iFanIT"
        title="Learning ReacJS with TypeScript"
        avatar="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1741850826386-9cb8e5543c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
        // author="iFanIT"
        title="Learning ReacJS with TypeScript"
        avatar="https://images.unsplash.com/photo-1742800233278-5cb49547377b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1742243305573-f5eada1d1490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
        author="iFanIT"
        title="Learning ReacJS with JavaScript"
        avatar="https://images.unsplash.com/photo-1741850820591-f6954a90c7ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
      ></YoutubeItem>
      <YoutubeItem
        image="https://plus.unsplash.com/premium_photo-1674498270498-84889156da0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
        author="iFanIT"
        title="Learning ReacJS with TypeScript"
        avatar="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1742243305573-f5eada1d1490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
        // author="iFanIT"
        title="Learning ReacJS with JavaScript"
        avatar="https://images.unsplash.com/photo-1741851374435-4f6a4ad679e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
      ></YoutubeItem>
      <YoutubeItem
        image="https://plus.unsplash.com/premium_photo-1674498270498-84889156da0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
        // author="iFanIT"
        title="Learning ReacJS with JavaScript"
        avatar="https://images.unsplash.com/photo-1741988766604-04b6f1b3236d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
      ></YoutubeItem>
    </div>
  );
}

export default App;
