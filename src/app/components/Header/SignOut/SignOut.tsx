"use client";

import { signOut } from "@/app/login/actions";
import styles from "./SignOut.module.css";
import { usePathname } from "next/navigation";

const SignOut = () => {
  const currentPath = usePathname();

  // login画面以外でsignoutボタンを表示
  if (currentPath !== "/login") {
    return (
      <div onClick={signOut} className={styles.text}>
        サインアウト
      </div>
    );
  }
};

export default SignOut;
