// lib/redux/store.ts (update)
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import navReducer from './navSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    nav: navReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;