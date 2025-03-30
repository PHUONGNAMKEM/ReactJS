import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import YoutubeList from "../../components/youtube/YoutubeList";

function App() {
  const name = "iFanIT";
  return (
    <div>
      <YoutubeList>
        <h2>{name}</h2>
      </YoutubeList>
    </div>
  );
}

export default App;
