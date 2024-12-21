"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getRooms_1f } from "@/lib/features/rooms_1f/rooms1fSlice";
import { getRooms_2f } from "@/lib/features/rooms_2f/rooms2fSlice";
import HouseRoomCard from "./HouseRoomCard/HouseRoomCard";
import styles from "./HouseMain.module.css";

const HouseMain = () => {
  const dispatch = useAppDispatch();
  const { is1f } = useAppSelector((state) => state.is1f);
  const { rooms1f } = useAppSelector((state) => state.rooms1f);
  const { rooms2f } = useAppSelector((state) => state.rooms2f);
  // is1Fの値によって表示する階を変更
  const floorRooms = is1f ? rooms1f : rooms2f;

  // 部屋データの取得
  useEffect(() => {
    dispatch(getRooms_1f());
    dispatch(getRooms_2f());
  }, [dispatch]);

  return (
    <main className={styles.main_wrapper}>
      {floorRooms!.map((room) => (
        <HouseRoomCard key={room.id} room={room} />
      ))}
    </main>
  );
};

export default HouseMain;
