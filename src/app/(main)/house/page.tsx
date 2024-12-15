"use client";

import FloorChangeButton from "@/app/components/Main/common/FloorChangeButton/FloorChangeButton";
import styles from "./page.module.css";
import HouseContents from "@/app/components/Main/house/HouseContents/HouseContents";
import { useState } from "react";

const HousePage = () => {
  const [is1F, setIs1F] = useState<boolean>(true);

  return (
    <div className={styles.wrapper}>
      <FloorChangeButton is1F={is1F} setIs1F={setIs1F} />
      <HouseContents />
    </div>
  );
};

export default HousePage;
