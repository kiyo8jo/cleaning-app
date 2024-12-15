"use client";

import { useState } from "react";
import FrontAside from "./FrontAside/FrontAside";

import styles from "./FrontContents.module.css";
import FrontMain from "./FrontMain/FrontMain";
import { Room } from "@/app/types/types";

interface Props {
  is1F: boolean;
  rooms_1f: Room[] | null;
  rooms_2f: Room[] | null;
  setRooms_1f: React.Dispatch<React.SetStateAction<Room[] | null>>;
  setRooms_2f: React.Dispatch<React.SetStateAction<Room[] | null>>;
}

const FrontContents = ({
  is1F,
  rooms_1f,
  rooms_2f,
  setRooms_1f,
  setRooms_2f,
}: Props) => {
  const [targetRoom, setTargetRoom] = useState<Room | null>(null);
  return (
    <div className={styles.front_contents_wrapper}>
      <FrontMain
        is1F={is1F}
        rooms_1f={rooms_1f}
        rooms_2f={rooms_2f}
        setTargetRoom={setTargetRoom}
      />
      <FrontAside
        is1F={is1F}
        rooms_1f={rooms_1f}
        rooms_2f={rooms_2f}
        targetRoom={targetRoom}
        setRooms_1f={setRooms_1f}
        setRooms_2f={setRooms_2f}
        setTargetRoom={setTargetRoom}
      />
    </div>
  );
};

export default FrontContents;
