import { Room } from "@/app/types/types";
import RoomCard from "../../../common/RoomCard/RoomCard";
import styles from "./HouseRoomCard.module.css";

interface Props {
  room: Room;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTargetRoom: React.Dispatch<React.SetStateAction<Room | null>>;
}

const HouseRoomCard = ({ room, setIsModalOpen, setTargetRoom }: Props) => {
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setIsModalOpen(true);
        setTargetRoom(room);
      }}
    >
      <RoomCard room={room} />
    </div>
  );
};

export default HouseRoomCard;
