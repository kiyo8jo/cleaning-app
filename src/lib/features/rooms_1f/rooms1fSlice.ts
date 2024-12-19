import { getRooms_1fAPI } from "@/app/api/room/getRooms";
import { Room } from "@/app/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRooms_1f = createAsyncThunk("getRooms/1f", getRooms_1fAPI);
// export const postRooms_1f = createAsyncThunk(
//   "postRooms_1f",
//   async (payload: { newRoom: Room }) => {
//     const { newRoom } = payload;
//     // const _noRemakeRooms = rooms.filter((room: Room) => {
//     //   return room.roomNumber !== newRoom.roomNumber;
//     // });
//     const _getInitializedNewRoom = () => {
//       if (newRoom.cleaningType !== "STAY") {
//         return { ...newRoom, stayCleaningType: "NOT-SELECT" };
//       } else {
//         return newRoom;
//       }
//     };
//     // const _newRooms = [..._noRemakeRooms, _getInitializedNewRoom()];
//     // const sortedNewRooms = _newRooms.sort(
//     //   (a, b) => a.roomNumber - b.roomNumber
//     // );

//     const res = await fetch(
//       `http://localhost:3001/rooms_1f?roomNumber=${newRoom.roomNumber}`,
//       {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           roomNumber: newRoom.roomNumber,
//           roomType: newRoom.roomType,
//           cleaningType: newRoom.cleaningType,
//           isKeyBack: newRoom.isKeyBack,
//           isCleaningComplete: newRoom.isCleaningComplete,
//           stayCleaningType: newRoom.stayCleaningType,
//           nowBeds: newRoom.nowBeds,
//           newBeds: newRoom.newBeds,
//           adult: newRoom.adult,
//           inf: newRoom.inf,
//           kidInf: newRoom.kidInf,
//           memo: newRoom.memo,
//           isWaitingCheck: newRoom.isWaitingCheck,
//         }),
//       }
//     );

//     const newRooms_1f = await res.json();
//     return newRooms_1f;
//   }
// );

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
  extraReducers: (builder) => {
    builder.addCase(getRooms_1f.fulfilled, (state, action) => {
      state.rooms1f = action.payload;
    });
  },
});

export const { setRooms1f } = rooms1fSlice.actions;
export default rooms1fSlice.reducer;
