
import styles from "./FrontMain.module.css";
import FrontRoomCard from "./FrontRoomCard/FrontRoomCard";

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
  testRooms: Room[];
  setTargetRoom: React.Dispatch<React.SetStateAction<Room | null>>;
}

const FrontMain = ({ testRooms, setTargetRoom }: Props) => {
  return (
    <main className={styles.main_wrapper}>
      {testRooms.map((room) => (
        <FrontRoomCard
          key={room.roomNumber}
          room={room}
          setTargetRoom={setTargetRoom}
        />
      ))}
    </main>
  );
};

export default FrontMain;
