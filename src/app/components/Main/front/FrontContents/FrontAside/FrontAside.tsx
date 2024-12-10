import { Room } from "@/app/types/types";
import FrontExistTargetAside from "./FrontExistTargetAside/FrontExistTargetAside";
import FrontNoTargetAside from "./FrontNoTargetAside/FrontNoTargetAside";

interface Props {
  rooms: Room[] | null;
  setRooms: React.Dispatch<React.SetStateAction<Room[] | null>>;
  targetRoom: Room | null;
  setTargetRoom: React.Dispatch<React.SetStateAction<Room | null>>;
}

const FrontAside = ({ rooms, setRooms, targetRoom, setTargetRoom }: Props) => {
  if (!targetRoom) return <FrontNoTargetAside />;

  return (
    <FrontExistTargetAside
      rooms={rooms}
      setRooms={setRooms}
      targetRoom={targetRoom}
      setTargetRoom={setTargetRoom}
    />
  );
};

export default FrontAside;
