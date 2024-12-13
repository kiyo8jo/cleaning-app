import RoomCard from "@/app/components/Main/common/RoomCard/RoomCard";
import styles from "./FrontRoomCard.module.css";
import { Room } from "@/app/types/types";

interface Props {
  room: Room;
  setTargetRoom: React.Dispatch<React.SetStateAction<Room | null>>;
}

const FrontRoomCard = ({ room, setTargetRoom }: Props) => {
  return (
    <div
      className={`${styles.wrapper} ${
        room.stayCleaningType === "NORMAL" ? styles[room.stayCleaningType] : ""
      }`}
      onClick={() => setTargetRoom(room)}
    >
      <RoomCard room={room} />
    </div>
  );
};

export default FrontRoomCard;
