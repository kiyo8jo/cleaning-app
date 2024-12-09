import { Room } from "@/app/types/types";
import styles from "./FrontMain.module.css";
import FrontRoomCard from "./FrontRoomCard/FrontRoomCard";

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
