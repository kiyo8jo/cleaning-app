import { Room } from "@/app/types/types";
import FrontExistTargetAside from "./FrontExistTargetAside/FrontExistTargetAside";
import FrontNoTargetAside from "./FrontNoTargetAside/FrontNoTargetAside";

interface Props {
  targetRoom: Room | null;
}

const FrontAside = ({ targetRoom }: Props) => {
  if (!targetRoom) return <FrontNoTargetAside />;

  return <FrontExistTargetAside targetRoom={targetRoom} />;
};

export default FrontAside;
