import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  id: 0,
};

export const userSlice = createSlice({
  name: "user", // This is the name of the slice, we will later use this name to access the slice from the store
  initialState: initialState, // This is the initial state of the slice
  reducers: {
    registerUser: (state, action) => {
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    loginUserSlice: (state, action) => {
      state = action.payload;
    },
  },
});

export const { registerUser, loginUserSlice } = userSlice.actions;

export default userSlice.reducer;
