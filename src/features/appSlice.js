import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: null,
  roomName: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
      state.roomName = action.payload.roomName;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;
export const selectRoomName = (state) => state.app.roomName;

export default appSlice.reducer;
