import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: 'Vasya',
  },
  reducers: {
    changeName(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { changeName } = userSlice.actions;

export default userSlice.reducer;
