import { useEffect, useRef, useState } from "react";

function StopWatch() {
  // const countRef = useRef(0);

  // const handle = () => {
  //   const updateCount = countRef.current + 1;
  //   console.log(`>>> Clicked ${updateCount} times!`);
  //   countRef.current++;
  // };

  const timerRef = useRef<number | null>(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };
  const handleStop = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // hiện tại theo mình biết thì use Effect sẽ được gọi khi component được mount (ko chạy vào return) và hàm return sẽ được gọi khi component unmounted
  useEffect(() => {
    return () => clearInterval(timerRef.current!);
  }, []);

  return (
    <div>
      {/* <button onClick={handle}>Click me</button> */}
      <h3>Timer: {count}s</h3>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}

export default StopWatch;
