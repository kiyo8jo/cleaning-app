"use client";

import { useState } from "react";
import RoomCard from "../../common/RoomCard/RoomCard";
import CleaningModal from "../CleaningModal/CleaningModal";
import styles from "./HouseContents.module.css";

interface Room {
  roomNumber: number;
  roomType: string;
  cleaningType: string;
  nowBeds: number;
  newBeds: number;
  adult: number;
  inf: number;
  kidInf: number;
}

const HouseContents = () => {
  const testRooms: Room[] = [
    {
      roomNumber: 221,
      roomType: "OTP",
      cleaningType: "OUT",
      nowBeds: 3,
      newBeds: 3,
      adult: 2,
      inf: 1,
      kidInf: 0,
    },
    {
      roomNumber: 223,
      roomType: "OTP",
      cleaningType: "OUT",
      nowBeds: 3,
      newBeds: 3,
      adult: 2,
      inf: 1,
      kidInf: 0,
    },
    {
      roomNumber: 224,
      roomType: "OTP",
      cleaningType: "OUT",
      nowBeds: 3,
      newBeds: 3,
      adult: 2,
      inf: 1,
      kidInf: 0,
    },
    {
      roomNumber: 225,
      roomType: "OTP",
      cleaningType: "OUT",
      nowBeds: 3,
      newBeds: 3,
      adult: 2,
      inf: 1,
      kidInf: 0,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <main className={styles.main_wrapper}>
        {testRooms.map((room) => (
          <RoomCard
            room={room}
            key={room.roomNumber}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </main>
      {isModalOpen && <CleaningModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default HouseContents;
