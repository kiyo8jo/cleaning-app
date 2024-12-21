import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Room } from "@/app/types/types";

// 2階の部屋取得
export const getRooms_2f = createAsyncThunk("getRooms/2f", async () => {
  const res = await fetch("http://localhost:3000/api/room/2f", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.rooms_2f;
});

// 2階の部屋編集
export const editRoom_2f = createAsyncThunk(
  "editRoom_2f",
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

    // 2階の部屋編集用APIをたたく
    const res = await fetch(`http://localhost:3000/api/room/2f/${newRoom.id}`, {
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRooms_2f.fulfilled, (state, action) => {
      state.rooms2f = action.payload;
    });
  },
});

export default rooms2fSlice.reducer;
