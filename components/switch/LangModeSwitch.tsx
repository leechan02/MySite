"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleLang } from "@/lib/redux/langSlice";
import { RootState } from "@/lib/redux/store";

export default function LangModeSwitch() {
  const dispatch = useDispatch();
  const isKorean = useSelector((state: RootState) => state.lang.isKorean);

  const handleToggle = () => {
    dispatch(toggleLang());
  };

  return (
    <button
      onClick={handleToggle}
      className={`w-14 h-8 p-1 bg-white/5 rounded-full shadow border-2 border-white/30 backdrop-blur-[15px] inline-flex items-center ${
        isKorean ? "justify-end" : "justify-start"
      }`}
    >
      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white font-bold text-xs font-[family-name:var(--font-geist-sans)]">
        {isKorean ? "Kr" : "En"}
      </div>
    </button>
  );
}