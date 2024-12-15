"use client";

import { useState } from "react";
import CleaningModal from "./CleaningModal/CleaningModal";
import styles from "./HouseContents.module.css";
import HouseRoomCard from "./HouseRoomCard/HouseRoomCard";
import { Room } from "@/app/types/types";

interface Props {
  is1F: boolean;
  rooms_1f: Room[] | null;
  rooms_2f: Room[] | null;
  setRooms_1f: React.Dispatch<React.SetStateAction<Room[] | null>>;
  setRooms_2f: React.Dispatch<React.SetStateAction<Room[] | null>>;
}
const HouseContents = ({
  is1F,
  rooms_1f,
  rooms_2f,
  setRooms_1f,
  setRooms_2f,
}: Props) => {
  const [targetRoom, setTargetRoom] = useState<Room | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const floorRooms = is1F ? rooms_1f : rooms_2f;

  return (
    <div className={styles.wrapper}>
      <main className={styles.main_wrapper}>
        {floorRooms!.map((room) => (
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
          is1F={is1F}
          rooms_1f={rooms_1f}
          rooms_2f={rooms_2f}
          setRooms_1f={setRooms_1f}
          setRooms_2f={setRooms_2f}
        />
      )}
    </div>
  );
};

export default HouseContents;
