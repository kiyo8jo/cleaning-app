"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getRooms_1f } from "@/lib/features/rooms_1f/rooms1fSlice";
import { getRooms_2f } from "@/lib/features/rooms_2f/rooms2fSlice";
import FrontRoomCard from "./FrontRoomCard/FrontRoomCard";
import styles from "./FrontMain.module.css";

const FrontMain = () => {
  const dispatch = useAppDispatch();
  const { is1f } = useAppSelector((state) => state.is1f);
  const { rooms1f, getRooms1fStatus } = useAppSelector((state) => state.rooms1f);
  const { rooms2f, getRooms2fStatus } = useAppSelector(
    (state) => state.rooms2f
  );

  // is1Fの値によって表示する階を変更
  const floorRooms = is1f ? rooms1f : rooms2f;

  // 部屋データの取得
  useEffect(() => {
    dispatch(getRooms_1f());
    dispatch(getRooms_2f());
  }, [dispatch]);

  return (
    <main className={styles.main_wrapper}>
      {/* データ取得成功 */}
      {getRooms1fStatus === "succeeded" &&
        getRooms2fStatus === "succeeded" &&
        floorRooms!.map((room) => <FrontRoomCard key={room.id} room={room} />)}

      {/* ロード中 */}
      {(getRooms1fStatus === "pending" || getRooms2fStatus === "pending") && (
        <div className={styles.get_data_status}>Now Loading...</div>
      )}

      {/* データ取得失敗 */}
      {getRooms1fStatus === "failed" ||
        (getRooms2fStatus === "failed" && (
          <div className={styles.get_data_status}>エラーが発生しました</div>
        ))}
    </main>
  );
};

export default FrontMain;
