import { createSlice } from "@reduxjs/toolkit";

const initialState = { isModalOpen: false };

const isModalOpen = createSlice({
  name: "isModalOpen",
  initialState,
  reducers: {
    setIsModalOpen: (state) => {
      state.isModalOpen = true;
    },
    setIsModalClose: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { setIsModalOpen, setIsModalClose } = isModalOpen.actions;
export default isModalOpen.reducer;
