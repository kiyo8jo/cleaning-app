"use client";

import { useState } from "react";
import FrontAside from "./FrontAside/FrontAside";

import styles from "./FrontContents.module.css";
import FrontMain from "./FrontMain/FrontMain";
import { Room } from "@/app/types/types";
import { testRooms } from "@/app/testRooms";

const FrontContents = () => {
  const [targetRoom, setTargetRoom] = useState<Room | null>(null);
  return (
    <div className={styles.front_contents_wrapper}>
      <FrontMain testRooms={testRooms} setTargetRoom={setTargetRoom} />
      <FrontAside targetRoom={targetRoom} />
    </div>
  );
};

export default FrontContents;
