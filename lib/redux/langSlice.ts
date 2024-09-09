// lib/redux/langSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface LangState {
  isKorean: boolean;
}

const initialState: LangState = {
  isKorean: false, // 기본값은 영어
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    toggleLang: (state) => {
      state.isKorean = !state.isKorean;
    },
  },
});

export const { toggleLang } = langSlice.actions;

export default langSlice.reducer;