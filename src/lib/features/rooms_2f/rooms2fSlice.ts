import { getRooms_2fAPI } from "@/app/api/room/getRooms";
import { Room } from "@/app/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRooms_2f = createAsyncThunk("getRooms/2f", getRooms_2fAPI);


interface RoomsState {
  rooms2f: Room[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  rooms2f: [],
  loading: "idle",
} satisfies RoomsState as RoomsState;

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
  extraReducers: (builder) => {
    builder.addCase(getRooms_2f.fulfilled, (state, action) => {
      state.rooms2f = action.payload;
    });
  },
});

export const { setRooms2f } = rooms2fSlice.actions;
export default rooms2fSlice.reducer;
