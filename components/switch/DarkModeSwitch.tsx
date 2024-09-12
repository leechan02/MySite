"use client";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/lib/redux/themeSlice";
import { RootState } from "@/lib/redux/store";
import moon from "@/public/image/moon.svg";
import sun from "@/public/image/sun.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DarkModeSwitch() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  
  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="w-14 h-8 p-1 bg-white/5 rounded-full shadow border-2 border-white/30 backdrop-blur-[15px] relative flex items-center"
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute left-1"
        animate={{
          x: isDarkMode ? "20px" : "0px",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <Image
          src={isDarkMode ? moon : sun}
          alt={isDarkMode ? "dark mode" : "light mode"}
          width={24}
          height={24}
        />
      </motion.div>
    </motion.button>
  );
}