import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleFixedHeader = () => {
      const header = document.getElementById("header");
      if (header && window.scrollY > 100) header.classList.add("fixed");
      else header?.classList.remove("fixed");
    };
    window.addEventListener("scroll", handleFixedHeader);
    return () => {
      window.removeEventListener("scroll", handleFixedHeader);
    };

    // ở đây lưu ý khi làm việc với use effec thì có add thì phải có remove ở return để cleanup function
    // lần chạy tiếp theo là phải clean up cái trước đó
  }, []);
  return <div className="w-full p-5 bg-black" id="header"></div>;
};

export default Header;
