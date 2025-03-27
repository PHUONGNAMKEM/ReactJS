import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { YoutubeData } from "../../data";

import "./App.css";
interface YoutubeItemProps {
  image: string;
  avatar: string;
  title: string;
  author?: string;
  className: string;
}

function YoutubeItem(props: YoutubeItemProps) {
  return (
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />

        <div className="youtube-info">
          <h3 className="youtube-title">
            {props.title || "This is an example of title"}
          </h3>
          <h4 className="youtube-author">
            {props.author ? props.author : "Vo danh"}
          </h4>
        </div>
      </div>
    </div>
  );
}

function App() {
  console.log(YoutubeData);
  return (
    <div className="youtube-list">
      {/* Rendering list thì nó yêu cầu mỗi item cần phải có key */}
      {YoutubeData.map((item, index) => {
        let newClass = "";
        if (index === 1) {
          newClass = "abc";
        }

        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            author={item.author}
            title={item.title}
            avatar={item.avatar || item.image}
            // avatar={item.avatar ? item.avatar : item.image}

            // className={index === 1 ? "abc" : ""}
            className={newClass}
          ></YoutubeItem>
        );
      })}

      {/* khi dùng arrow function => {} là để xử lý logic phức tạp - bắt buộc phải phải return */}
      {/* {YoutubeData.map((item) => {
        return <li>{item.title}</li>;
      })} */}

      {/* khi dùng arrow function => () thì nó sẽ tự động trả về giá trị bên trong mà ko cần từ khóa return - khi trả về JSX trong arrow function thì thg để trong ( )  */}
      {/* {YoutubeData.map((item) => (
        <li>{item.title}</li>
      ))} */}
    </div>
  );
}

export default App;
