"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setTargetRoom } from "@/lib/features/targetRoom/targetRoomSlice";
import { setIsModalOpen } from "@/lib/features/modal/isModalOpen";
import { Room } from "@/app/types/types";
import RoomCard from "@/app/components/Main/common/RoomCard/RoomCard";
import styles from "./HouseRoomCard.module.css";

interface Props {
  room: Room;
}

const HouseRoomCard = ({ room }: Props) => {
  const dispatch = useAppDispatch();
  const { is1f } = useAppSelector((state) => state.is1f);
  const { rooms1f } = useAppSelector((state) => state.rooms1f);
  const { rooms2f } = useAppSelector((state) => state.rooms2f);

  return (
    <div
      className={`${styles.wrapper} ${
        room.stayCleaningType === "NORMAL" && styles[room.stayCleaningType]
      }`}
      onClick={() => {
        dispatch(setTargetRoom({ room, is1f, rooms1f, rooms2f }));
        dispatch(setIsModalOpen());
      }}
    >
      <RoomCard room={room} />
    </div>
  );
};

export default HouseRoomCard;
