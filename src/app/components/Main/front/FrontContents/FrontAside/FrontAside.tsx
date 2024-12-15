import { Room } from "@/app/types/types";
import FrontExistTargetAside from "./FrontExistTargetAside/FrontExistTargetAside";
import FrontNoTargetAside from "./FrontNoTargetAside/FrontNoTargetAside";

interface Props {
  is1F: boolean;
  rooms_1f: Room[] | null;
  rooms_2f: Room[] | null;
  targetRoom: Room | null;
  setRooms_1f: React.Dispatch<React.SetStateAction<Room[] | null>>;
  setRooms_2f: React.Dispatch<React.SetStateAction<Room[] | null>>;
  setTargetRoom: React.Dispatch<React.SetStateAction<Room | null>>;
}

const FrontAside = ({
  is1F,
  rooms_1f,
  rooms_2f,
  targetRoom,
  setRooms_1f,
  setRooms_2f,
  setTargetRoom,
}: Props) => {
  if (!targetRoom) return <FrontNoTargetAside />;

  return (
    <FrontExistTargetAside
      is1F={is1F}
      rooms_1f={rooms_1f}
      rooms_2f={rooms_2f}
      targetRoom={targetRoom}
      setRooms_1f={setRooms_1f}
      setRooms_2f={setRooms_2f}
      setTargetRoom={setTargetRoom}
    />
  );
};

export default FrontAside;
