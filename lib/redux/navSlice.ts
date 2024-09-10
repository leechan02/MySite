// lib/redux/navSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavState {
  selectedItem: string;
}

const initialState: NavState = {
  selectedItem: 'Work',
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setNavItem: (state, action: PayloadAction<string>) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setNavItem } = navSlice.actions;
export default navSlice.reducer;