import React, { useEffect, useRef, useState } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  //   const [parentHeight, setParentHeight] = useState("auto");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaHeight("auto");
    // setParentHeight(`${textareaRef?.current?.scrollHeight}px`);

    setText(event.target.value);
  };

  //   console.log(">>> check textarearef current: ", textareaRef.current);

  useEffect(() => {
    // if (textareaRef.current) {
    //   setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
    // }

    // console.log(`${textareaRef?.current?.scrollHeight}px`);

    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    textareaRef.current?.focus(); // tự focus
    // setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);

  return (
    <div className="p-5">
      <textarea
        className="w-full max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-400 resize-none outline-none overflow-hidden transition-all"
        placeholder="Please enter your content..."
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
