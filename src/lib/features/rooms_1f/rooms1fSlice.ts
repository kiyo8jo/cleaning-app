import { testRooms_1f } from "@/app/testRooms";
import { Room } from "@/app/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { rooms1f: testRooms_1f };

const rooms1fSlice = createSlice({
  name: "rooms1f",
  initialState,
  reducers: {
    setRooms1f: (state, actions) => {
      const { rooms, newRoom }: { rooms: Room[]; newRoom: Room } =
        actions.payload;
      const _noRemakeRooms = rooms.filter((room) => {
        return room.roomNumber !== newRoom.roomNumber;
      });

      const _getInitializedNewRoom = () => {
        if (newRoom.cleaningType !== "STAY") {
          return { ...newRoom, stayCleaningType: "NOT-SELECT" };
        } else {
          return newRoom;
        }
      };
      const _newRooms = [..._noRemakeRooms, _getInitializedNewRoom()];
      const sortedNewRooms = _newRooms.sort(
        (a, b) => a.roomNumber - b.roomNumber
      );
      state.rooms1f = sortedNewRooms;
    },
  },
});

export const { setRooms1f } = rooms1fSlice.actions;
export default rooms1fSlice.reducer;
