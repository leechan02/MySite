"use client";

import { motion } from "framer-motion";

const LoadingDot = ({ delay }: { delay: number }) => (
  <motion.div
    className="w-1 h-1 bg-foreground rounded-full"
    animate={{
      y: ["0%", "-50%", "0%"],
    }}
    transition={{
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-1">
      <div className="flex space-x-2 mb-4">
        <LoadingDot delay={0} />
        <LoadingDot delay={0.2} />
        <LoadingDot delay={0.4} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-foreground text-xs font-mono"
      >
        Wait a sec
      </motion.div>
    </div>
  );
}