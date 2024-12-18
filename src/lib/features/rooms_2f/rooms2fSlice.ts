import { testRooms_2f } from "@/app/testRooms";
import { Room } from "@/app/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { rooms2f: testRooms_2f };

const rooms2fSlice = createSlice({
  name: "rooms2f",
  initialState,
  reducers: {
    setRooms2f: (state, actions) => {
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
      state.rooms2f = sortedNewRooms;
    },
  },
});

export const { setRooms2f } = rooms2fSlice.actions;
export default rooms2fSlice.reducer;
