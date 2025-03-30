import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const [info, setInfo] = useState({
    firstName: "phuong",
    lastName: "nam",
  });

  // const handleIncrement = () => {
  //   // sẽ bị stale state: khi ghi như vầy setCount(count + 1); -> Khi setTimeout chạy sau 1 giây, nó sử dụng giá trị count cũ tại thời điểm setTimeout được gọi, không phải giá trị mới nhất của state
  //   setTimeout(function delay() {
  //     setCount((count) => count + 1);
  //     //   setCount(count + 1);
  //   }, 1000);
  // };

  useEffect(() => {
    console.log("from input");
  }, [info.firstName]); // chỉ truyền vào chính xác giá trị mà ta muốn thay đổi thôi không truyền vào một object có 2 thuộc tính
  // khi chúng ta set dependencies [] thì useeffect chỉ chạy 1 lần khi component mounted xong thoi
  // còn nếu set dep là [count] thì khi nào count THAY ĐỔI thì đoạn code trong useEffect mới chạy

  return (
    <div className="flex items-center p-5 gap-x-4">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
      />
      <span className="text-2xl font-bold">{count}</span>
      <button className="inline-block p-3 text-white bg-green-400">
        Increment
      </button>
    </div>
  );
}

export default Counter;
