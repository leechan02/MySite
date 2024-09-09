// components/ThemeToggle.tsx
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/lib/redux/themeSlice';
import { RootState } from '@/lib/redux/store';

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      {isDarkMode ? '라이트 모드' : '다크 모드'}
    </button>
  );
}