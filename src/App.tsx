// import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
// import TextAreaAutoResize from "./components/TextAreaAutoResize";
import CardList from "./components/card/CardList";
import Card from "./components/card/Card";
// import StopWatch from "./components/StopWatch";
// import Input from "./components/Input";
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
  return (
    <div>
      {/* <StopWatch></StopWatch> */}
      {/* <Input></Input> */}
      {/* <TextAreaAutoResize></TextAreaAutoResize> */}
      <div>
        <CardList>
          <Card 
            userName="@zndrson" 
            userAvatar="https://cdn.dribbble.com/userupload/33476220/file/original-d4ca59ef4ed0cbb2bb3600be756e5d74.png?resize=1504x1128&vertical=center" 
            amount={"12,000 PSL"} 
            cardTitle="Cosmic Perspective" 
            amountRate={256} 
            cardImg="https://cdn.dribbble.com/userupload/33476220/file/original-d4ca59ef4ed0cbb2bb3600be756e5d74.png?resize=1504x1128&vertical=center" 
            secondary={true}>
          </Card>

          <Card 
            userName="@phuongnam" 
            userAvatar="https://cdn.dribbble.com/userupload/16708409/file/original-5fe46e5d163a197bae42df644a278eef.png?resize=1024x768&vertical=center" 
            amount={"12,000 PSL"} 
            cardTitle="Cosmic Perspective" 
            amountRate={256} 
            cardImg="https://cdn.dribbble.com/userupload/16708409/file/original-5fe46e5d163a197bae42df644a278eef.png?resize=1024x768&vertical=center">

          </Card>
          <Card 
            userName="@ifanit" 
            userAvatar="https://cdn.dribbble.com/userupload/10359938/file/original-03d701b593901415bef3d4eeba1dee36.png?resize=1024x768&vertical=center" 
            amount={"12,000 PSL"} 
            cardTitle="Cosmic Perspective" 
            amountRate={256} 
            cardImg="https://cdn.dribbble.com/userupload/10359938/file/original-03d701b593901415bef3d4eeba1dee36.png?resize=1024x768&vertical=center">

          </Card>
          <Card 
            userName="@learningreact" 
            userAvatar="https://cdn.dribbble.com/userupload/6962718/file/original-41768847cfe004f977079e01f4c4969c.png?resize=1024x768&vertical=center" 
            amount={"12,000 PSL"} 
            cardTitle="Cosmic Perspective" 
            amountRate={256} 
            cardImg="https://cdn.dribbble.com/userupload/6962718/file/original-41768847cfe004f977079e01f4c4969c.png?resize=1024x768&vertical=center">

          </Card>
          <Card 
            userName="@makingvideo" 
            userAvatar="https://cdn.dribbble.com/userupload/39966170/file/original-e9d6d578dd619389967e74473c2c719a.png?resize=1024x768&vertical=center" 
            amount={"12,000 PSL"} 
            cardTitle="Cosmic Perspective" 
            amountRate={256} 
            cardImg="https://cdn.dribbble.com/userupload/39966170/file/original-e9d6d578dd619389967e74473c2c719a.png?resize=1024x768&vertical=center">

          </Card>
          <Card 
            userName="@nodejs" 
            userAvatar="https://cdn.dribbble.com/userupload/39553563/file/original-ccb24c7ab82840431efbb14812566823.png?resize=1024x768&vertical=center" 
            amount={"12,000 PSL"} 
            cardTitle="Cosmic Perspective" 
            amountRate={256} 
            cardImg="https://cdn.dribbble.com/userupload/39553563/file/original-ccb24c7ab82840431efbb14812566823.png?resize=1024x768&vertical=center">

          </Card>
        </CardList>
      </div>
    </div>
  );
}

export default App;
