"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setTargetRoom } from "@/lib/features/targetRoom/targetRoomSlice";
import { Room } from "@/app/types/types";
import RoomCard from "@/app/components/Main/common/RoomCard/RoomCard";
import styles from "./FrontRoomCard.module.css";

interface Props {
  room: Room;
}

const FrontRoomCard = ({ room }: Props) => {
  const dispatch = useAppDispatch();
  const { is1f } = useAppSelector((state) => state.is1f);
  const { rooms1f } = useAppSelector((state) => state.rooms1f);
  const { rooms2f } = useAppSelector((state) => state.rooms2f);
  return (
    <div
      className={`${styles.wrapper} ${
        room.stayCleaningType === "NORMAL" && styles[room.stayCleaningType]
      }`}
      onClick={() => dispatch(setTargetRoom({ room, is1f, rooms1f, rooms2f }))}
    >
      <RoomCard room={room} />
    </div>
  );
};

export default FrontRoomCard;
