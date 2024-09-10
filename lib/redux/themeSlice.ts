// lib/redux/themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false, // 기본값은 여전히 false로 설정
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
      // 로컬 스토리지에 설정 저장
      localStorage.setItem('isDarkMode', JSON.stringify(action.payload));
    },
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      // 로컬 스토리지에 설정 저장
      localStorage.setItem('isDarkMode', JSON.stringify(state.isDarkMode));
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;