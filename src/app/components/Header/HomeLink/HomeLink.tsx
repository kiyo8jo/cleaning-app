"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeLink = () => {
  const currentPath = usePathname();

  // home,login画面以外でhome画面へ戻るボタンを表示
  if (currentPath !== "/" && currentPath !== "/login") {
    return <Link href="/">Homeへ戻る</Link>;
  }
};

export default HomeLink;
