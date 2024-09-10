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
    // 로컬 스토리지에서 테마 설정 확인
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme !== null) {
      dispatch(setTheme(JSON.parse(savedTheme)));
    } else {
      // 저장된 설정이 없으면 시스템 설정 확인
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      dispatch(setTheme(prefersDark));
    }
  }, [dispatch]);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return <>{children}</>;
}