"use client";

import { useAppSelector } from "@/lib/hooks";
import HouseRoomCard from "./HouseRoomCard/HouseRoomCard";
import CleaningModal from "./CleaningModal/CleaningModal";
import styles from "./HouseContents.module.css";

const HouseContents = () => {
  const { is1f } = useAppSelector((state) => state.is1f);
  const { rooms1f } = useAppSelector((state) => state.rooms1f);
  const { rooms2f } = useAppSelector((state) => state.rooms2f);
  const {isModalOpen} = useAppSelector((state) => state.isModalOpen);
  // is1Fの値によって表示する階を変更
  const floorRooms = is1f ? rooms1f : rooms2f;

  return (
    <div className={styles.wrapper}>
      <main className={styles.main_wrapper}>
        {floorRooms!.map((room) => (
          <HouseRoomCard key={room.roomNumber} room={room} />
        ))}
      </main>
      {isModalOpen && <CleaningModal />}
    </div>
  );
};

export default HouseContents;
