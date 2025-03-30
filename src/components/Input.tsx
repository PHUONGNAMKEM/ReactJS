import React, { useEffect, useRef } from "react";

const Input = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(divRef.current);
    // if (divRef.current) {
    //   divRef.current.style.backgroundColor = "red";
    // }

    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <div className="input-div" ref={divRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Auto focus input"
        className="inline-block p-5 border border-gray-200 outline-none focus:border-blue-400"
      />
    </div>
  );
};

export default Input;
