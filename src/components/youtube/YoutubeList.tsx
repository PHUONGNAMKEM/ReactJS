import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

interface YoutubeListProps {
  children: React.ReactNode; // React.ReactNode là kiểu của children, bao gồm bất kỳ nội dung nào có thể render trong React (JSX, string, number, array, v.v.)
}

function YoutubeList(props: YoutubeListProps) {
  console.log(props);
  return (
    <div className="youtube-list">
      {props.children}
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

export default YoutubeList;
