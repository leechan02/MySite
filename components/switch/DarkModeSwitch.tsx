"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/lib/redux/themeSlice";
import { RootState } from "@/lib/redux/store";
import moon from "@/public/moon.svg";
import sun from "@/public/sun.svg";
import Image from "next/image";

export default function DarkModeSwitch() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      className={`w-14 h-8 p-1 bg-white/5 rounded-full shadow border-2 border-white/30 backdrop-blur-[15px] inline-flex items-center ${
        isDarkMode ? "justify-end" : "justify-start"
      }`}
    >
      <Image
        src={isDarkMode ? moon : sun}
        alt={isDarkMode ? "dark mode" : "light mode"}
        width={24}
        height={24}
      />
    </button>
  );
}
