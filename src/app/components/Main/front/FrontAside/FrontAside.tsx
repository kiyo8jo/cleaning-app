import FrontExistTargetAside from "./FrontExistTargetAside/FrontExistTargetAside";
import FrontNoTargetAside from "./FrontNoTargetAside/FrontNoTargetAside";

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
  targetRoom: Room | null;
}

const FrontAside = ({ targetRoom }: Props) => {
  if (!targetRoom) return <FrontNoTargetAside />;

  return <FrontExistTargetAside targetRoom={targetRoom} />;
};

export default FrontAside;
