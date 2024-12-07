import RoomCard from "../../common/RoomCard/RoomCard";
import styles from './HouseRoomCard.module.css'

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
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HouseRoomCard = ({ room, setIsModalOpen }: Props) => {
  return (
    <div className={styles.wrapper} onClick={() => setIsModalOpen(true)}>
      <RoomCard room={room} />
    </div>
  );
};

export default HouseRoomCard;
