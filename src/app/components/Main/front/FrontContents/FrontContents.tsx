"use client";

import { useState } from "react";
import FrontAside from "./FrontAside/FrontAside";

import styles from "./FrontContents.module.css";
import FrontMain from "./FrontMain/FrontMain";
import { Room } from "@/app/types/types";
import { testRooms } from "@/app/testRooms";

const FrontContents = () => {
  const [rooms, setRooms] = useState<Room[] | null>(testRooms);
  const [targetRoom, setTargetRoom] = useState<Room | null>(null);
  return (
    <div className={styles.front_contents_wrapper}>
      <FrontMain rooms={rooms} setTargetRoom={setTargetRoom} />
      <FrontAside
        rooms={rooms}
        setRooms={setRooms}
        targetRoom={targetRoom}
        setTargetRoom={setTargetRoom}
      />
    </div>
  );
};

export default FrontContents;
