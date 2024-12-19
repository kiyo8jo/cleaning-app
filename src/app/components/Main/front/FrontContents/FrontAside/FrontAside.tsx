"use client";

import { useAppSelector } from "@/lib/hooks";
import FrontNoTargetAside from "./FrontNoTargetAside/FrontNoTargetAside";
import FrontExistTargetAside from "./FrontExistTargetAside/FrontExistTargetAside";

const FrontAside = () => {
  const { targetRoom } = useAppSelector((state) => state.targetRoom);

  // targetRoomが{}の場合、FrontNoTargetAsideコンポーネントを表示
  if (Object.keys(targetRoom).length === 0) return <FrontNoTargetAside />;

  // targetRoomが{}以外の場合FrontExistTargetAsideコンポーネントを表示
  return <FrontExistTargetAside />;
};

export default FrontAside;
