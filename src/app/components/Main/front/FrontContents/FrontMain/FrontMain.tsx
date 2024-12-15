import { Room } from "@/app/types/types";
import styles from "./FrontMain.module.css";
import FrontRoomCard from "./FrontRoomCard/FrontRoomCard";

interface Props {
  is1F: boolean;
  rooms_1f: Room[] | null;
  rooms_2f: Room[] | null;
  setTargetRoom: React.Dispatch<React.SetStateAction<Room | null>>;
}

const FrontMain = ({ is1F, rooms_1f, rooms_2f, setTargetRoom }: Props) => {
  const floorRooms = is1F ? rooms_1f : rooms_2f;
  return (
    <main className={styles.main_wrapper}>
      {floorRooms!.map((room) => (
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
