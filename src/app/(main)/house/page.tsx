"use client";

import FloorChangeButton from "@/app/components/Main/common/FloorChangeButton/FloorChangeButton";
import styles from "./page.module.css";
import HouseContents from "@/app/components/Main/house/HouseContents/HouseContents";
import { useState } from "react";
import { Room } from "@/app/types/types";
import { testRooms_1f, testRooms_2f } from "@/app/testRooms";

const HousePage = () => {
  const [is1F, setIs1F] = useState<boolean>(true);
  const [rooms_1f, setRooms_1f] = useState<Room[] | null>(testRooms_1f);
  const [rooms_2f, setRooms_2f] = useState<Room[] | null>(testRooms_2f);

  return (
    <div className={styles.wrapper}>
      <FloorChangeButton is1F={is1F} setIs1F={setIs1F} />
      <HouseContents
        is1F={is1F}
        rooms_1f={rooms_1f}
        rooms_2f={rooms_2f}
        setRooms_1f={setRooms_1f}
        setRooms_2f={setRooms_2f}
      />
    </div>
  );
};

export default HousePage;
