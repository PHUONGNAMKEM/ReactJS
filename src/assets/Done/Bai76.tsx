// import "./App.css";
import { useRef } from "react";
import "./index.scss";
// import Counter from "./components/counter/Counter";
// import Header from "./components/Header";
// import HackerNews from "./components/news/HackerNews";
// import HackerNewsReducer from "./components/news/HackerNewsReducer";
// import HackerNewsPractice from "./components/news/HackerNewsPractice";
// import Timer from "./components/Timer";
// import Photos from "./components/photo/Photo";
// import Card from "./components/card/Card";
// import CardList from "./components/card/CardList";

function App() {
  const countRef = useRef(0);

  // truy xuất giá trị => .current
  // update giá trị => .current = new Value
  // khác với state: khi state thay đổi thì component sẽ re-render lại
  // còn ref thay đổi thì component không re-render lại
  console.log(">>> check countref: ", countRef.current);

  return <div></div>;
}

export default App;
