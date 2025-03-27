import { YoutubeData } from "../../data";

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

export default YoutubeItem;
