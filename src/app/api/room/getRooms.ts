import { Room } from "@/app/types/types";

export const getRooms_1fAPI = async (): Promise<Room[]> => {
  const res = await fetch("http://localhost:3001/rooms_1f", {
    cache: "no-store",
  });
  const rooms1f = await res.json();
  return rooms1f;
};

export const getRooms_2fAPI = async (): Promise<Room[]> => {
  const res = await fetch("http://localhost:3001/rooms_2f", {
    cache: "no-store",
  });
  const rooms2f = await res.json();
  return rooms2f;
};
