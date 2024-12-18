import { configureStore } from "@reduxjs/toolkit";
import rooms1fReducer from "../lib/features/rooms_1f/rooms1fSlice";
import rooms2fReducer from "../lib/features/rooms_2f/rooms2fSlice";
import is1fReducer from "../lib/features/is1f/is1fSlice";
import targetRoomReducer from "../lib/features/targetRoom/targetRoomSlice";
import isModalOpenReducer from "../lib/features/modal/isModalOpen";

export const makeStore = () => {
  return configureStore({
    reducer: {
      rooms1f: rooms1fReducer,
      rooms2f: rooms2fReducer,
      is1f: is1fReducer,
      targetRoom: targetRoomReducer,
      isModalOpen: isModalOpenReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = makeStore();
