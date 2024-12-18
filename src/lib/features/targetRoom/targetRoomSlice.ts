import { Room } from "@/app/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface EmptyObject {
  [key: string]: never;
}

const initialState = {
  targetRoom: {} as Room | EmptyObject,
};

const targetRoomSlice = createSlice({
  name: "targetRoom",
  initialState,
  reducers: {
    setTargetRoom: (state, actions) => {
      const {
        room,
        is1f,
        rooms1f,
        rooms2f,
      }: {
        room: Room | EmptyObject;
        is1f: boolean;
        rooms1f: Room[];
        rooms2f: Room[];
      } = actions.payload;
      const floor: Room[] = is1f ? rooms1f : rooms2f;
      const createTargetRoom = () => {
        const _targetRoom = floor?.find(
          (_room) => _room.roomNumber === room.roomNumber
        );
        if (_targetRoom === undefined) return {};
        return _targetRoom;
      };
      state.targetRoom = createTargetRoom();
    },
  },
});

export const { setTargetRoom } = targetRoomSlice.actions;
export default targetRoomSlice.reducer;
