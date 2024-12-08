import RoomCard from "../../common/RoomCard/RoomCard";
import styles from "./FrontRoomCard.module.css";

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

interface Props {
  room: Room;
  setTargetRoom: React.Dispatch<React.SetStateAction<Room | null>>;
}

const FrontRoomCard = ({ room, setTargetRoom }: Props) => {
  return (
    <div className={styles.wrapper} onClick={() => setTargetRoom(room)}>
      <RoomCard room={room} />
    </div>
  );
};

export default FrontRoomCard;
