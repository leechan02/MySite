"use client";
import { useDispatch, useSelector } from "react-redux";
import { toggleLang } from "@/lib/redux/langSlice";
import { RootState } from "@/lib/redux/store";
import { motion } from "framer-motion";

export default function LangModeSwitch() {
  const dispatch = useDispatch();
  const isKorean = useSelector((state: RootState) => state.lang.isKorean);
  
  const handleToggle = () => {
    dispatch(toggleLang());
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="w-14 h-8 bg-white/5 rounded-full shadow border-2 border-white/30 backdrop-blur-[15px] relative flex items-center"
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute left-0 flex items-center justify-center w-8 h-8"
        animate={{
          x: isKorean ? "20px" : "0px",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div 
          className="w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center text-foreground font-semibold text-xs font-mono"
        >
          {isKorean ? "Kr" : "En"}
        </div>
      </motion.div>
    </motion.button>
  );
}