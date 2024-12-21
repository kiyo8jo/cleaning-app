import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Room } from "@/app/types/types";

// 1階の部屋取得
export const getRooms_1f = createAsyncThunk("getRooms/1f", async () => {
  const res = await fetch("http://localhost:3000/api/room/1f", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.rooms_1f;
});

// 1階の部屋編集
export const editRoom_1f = createAsyncThunk(
  "editRoom_1f",
  async (payload: { newRoom: Room }) => {
    const { newRoom } = payload;

    // バリデーション
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

    // stayCleaningTypeの初期化
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

    // 1階の部屋編集用APIをたたく
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRooms_1f.fulfilled, (state, action) => {
      state.rooms1f = action.payload;
    });
  },
});

export default rooms1fSlice.reducer;
