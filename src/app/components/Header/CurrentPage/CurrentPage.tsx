"use client";

import { usePathname } from "next/navigation";

const CurrentPage = () => {
  let displayPathName = "";
  const currentPath = usePathname();

  // 現在位置により表示する文字を変更する関数
  const getCurrentPathName = () => {
    switch (currentPath) {
      case "/front":
        displayPathName = "フロント用画面";
        break;
      case "/house":
        displayPathName = "ハウス用画面";
        break;
    }
  };

  getCurrentPathName();

  return <div>{displayPathName}</div>;
};

export default CurrentPage;
