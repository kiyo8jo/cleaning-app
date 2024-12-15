"use client";

import FrontContents from "@/app/components/Main/front/FrontContents/FrontContents";
import styles from "./page.module.css";
import FloorChangeButton from "@/app/components/Main/common/FloorChangeButton/FloorChangeButton";
import { useState } from "react";

const FrontPage = () => {
  const [is1F, setIs1F] = useState<boolean>(true);
  return (
    <div className={styles.wrapper}>
      <FloorChangeButton is1F={is1F} setIs1F={setIs1F} />
      <FrontContents />
    </div>
  );
};

export default FrontPage;
