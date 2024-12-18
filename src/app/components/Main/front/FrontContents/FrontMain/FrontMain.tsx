"use client";

import { useAppSelector } from "@/lib/hooks";
import FrontRoomCard from "./FrontRoomCard/FrontRoomCard";
import styles from "./FrontMain.module.css";

const FrontMain = () => {
  const { is1f } = useAppSelector((state) => state.is1f);
  const { rooms1f } = useAppSelector((state) => state.rooms1f);
  const { rooms2f } = useAppSelector((state) => state.rooms2f);
  // is1Fの値によって表示する階を変更
  const floorRooms = is1f ? rooms1f : rooms2f;
  return (
    <main className={styles.main_wrapper}>
      {floorRooms!.map((room) => (
        <FrontRoomCard key={room.roomNumber} room={room} />
      ))}
    </main>
  );
};

export default FrontMain;
