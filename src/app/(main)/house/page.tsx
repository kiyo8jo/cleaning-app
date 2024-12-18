"use client";

import FloorChangeButton from "@/app/components/Main/common/FloorChangeButton/FloorChangeButton";
import HouseContents from "@/app/components/Main/house/HouseContents/HouseContents";
import styles from "./page.module.css";

const HousePage = () => {
  return (
    <div className={styles.wrapper}>
      <FloorChangeButton />
      <HouseContents />
    </div>
  );
};

export default HousePage;
