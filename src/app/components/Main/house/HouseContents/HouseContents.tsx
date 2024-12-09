"use client";

import { useState } from "react";
import CleaningModal from "./CleaningModal/CleaningModal";
import styles from "./HouseContents.module.css";
import HouseRoomCard from "./HouseRoomCard/HouseRoomCard";
import { Room } from "@/app/types/types";
import { testRooms } from "@/app/testRooms";

const HouseContents = () => {
  const [targetRoom, setTargetRoom] = useState<Room | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <main className={styles.main_wrapper}>
        {testRooms.map((room) => (
          <HouseRoomCard
            key={room.roomNumber}
            room={room}
            setIsModalOpen={setIsModalOpen}
            setTargetRoom={setTargetRoom}
          />
        ))}
      </main>
      {isModalOpen && (
        <CleaningModal
          targetRoom={targetRoom}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default HouseContents;
