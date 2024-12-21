import { Room } from "@/app/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRooms_1f = createAsyncThunk("getRooms/1f", async () => {
  const res = await fetch("http://localhost:3000/api/room/1f", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.rooms_1f;
});

export const editRoom_1f = createAsyncThunk(
  "editRoom_1f",
  async (payload: { newRoom: Room }) => {
    const { newRoom } = payload;

    if (
      newRoom.cleaningType === "STAY" &&
      newRoom.stayCleaningType === "NOT-SELECT"
    ) {
      alert("stayCleaningTypeが選択されていません");
      return;
    }
    if (
      newRoom.cleaningType == "STAY" &&
      newRoom.stayCleaningType == "NOT-SELECT"
    ) {
      alert("必要のないstayCleaningTypeが選択されています");
      return;
    }

    newRoom.stayCleaningType =
      newRoom.cleaningType === "STAY" ? newRoom.stayCleaningType : "NOT-SELECT";

    const {
      cleaningType,
      stayCleaningType,
      isKeyBack,
      isCleaningComplete,
      isWaitingCheck,
      nowBeds,
      newBeds,
      adult,
      inf,
      kidInf,
      memo,
    } = newRoom;

    const res = await fetch(`http://localhost:3000/api/room/1f/${newRoom.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cleaningType,
        stayCleaningType,
        isKeyBack,
        isCleaningComplete,
        isWaitingCheck,
        nowBeds,
        newBeds,
        adult,
        inf,
        kidInf,
        memo,
      }),
    });
    return await res.json();
  }
);

interface RoomsState {
  rooms1f: Room[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  rooms1f: [],
  loading: "idle",
} satisfies RoomsState as RoomsState;

const rooms1fSlice = createSlice({
  name: "rooms1f",
  initialState,
  reducers: {
    setRooms1f: (state, actions) => {
      const { rooms, newRoom }: { rooms: Room[]; newRoom: Room } =
        actions.payload;
      const _noRemakeRooms = rooms.filter((room) => {
        return room.id !== newRoom.id;
      });

      const _getInitializedNewRoom = () => {
        if (newRoom.cleaningType !== "STAY") {
          return { ...newRoom, stayCleaningType: "NOT-SELECT" };
        } else {
          return newRoom;
        }
      };
      const _newRooms = [..._noRemakeRooms, _getInitializedNewRoom()];
      const sortedNewRooms = _newRooms.sort((a, b) => a.id - b.id);
      state.rooms1f = sortedNewRooms;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRooms_1f.fulfilled, (state, action) => {
      state.rooms1f = action.payload;
    });
  },
});

export const { setRooms1f } = rooms1fSlice.actions;
export default rooms1fSlice.reducer;
