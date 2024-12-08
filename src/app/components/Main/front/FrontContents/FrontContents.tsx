"use client";

import { useState } from "react";
import FrontAside from "../FrontAside/FrontAside";
import FrontMain from "../FrontMain/FrontMain";
import styles from "./FrontContents.module.css";

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

const FrontContents = () => {
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
  const [targetRoom, setTargetRoom] = useState<Room | null>(null);
  return (
    <div className={styles.front_contents_wrapper}>
      <FrontMain testRooms={testRooms} setTargetRoom={setTargetRoom} />
      <FrontAside targetRoom={targetRoom}/>
    </div>
  );
};

export default FrontContents;
