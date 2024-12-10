import { Room } from "@/app/types/types";
import styles from "./FrontMain.module.css";
import FrontRoomCard from "./FrontRoomCard/FrontRoomCard";

interface Props {
  rooms: Room[] | null;
  setTargetRoom: React.Dispatch<React.SetStateAction<Room | null>>;
}

const FrontMain = ({ rooms, setTargetRoom }: Props) => {
  return (
    <main className={styles.main_wrapper}>
      {rooms
        ? rooms.map((room) => (
            <FrontRoomCard
              key={room.roomNumber}
              room={room}
              setTargetRoom={setTargetRoom}
            />
          ))
        : "roomsがありません"}
    </main>
  );
};

export default FrontMain;
