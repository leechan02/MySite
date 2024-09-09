// components/ThemeProvider.tsx
'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { setTheme } from '@/lib/redux/themeSlice';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    dispatch(setTheme(prefersDark));
  }, [dispatch]);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return <>{children}</>;
}