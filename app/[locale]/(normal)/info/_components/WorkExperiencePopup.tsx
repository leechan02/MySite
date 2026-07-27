"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import MacButtons from "@/components/button/MacButtons";

interface WorkExperiencePopupProps {
  title: string;
  intro: string;
  highlights: string[];
  onClose: () => void;
}

export default function WorkExperiencePopup({
  title,
  intro,
  highlights,
  onClose,
}: WorkExperiencePopupProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      aria-modal='true'
      className='fixed inset-0 z-[60] flex items-center justify-center bg-background/60 p-4 backdrop-blur-sm'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role='dialog'
    >
      <motion.div
        className='max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[32px] border-2 border-foreground/10 bg-background p-6 font-mono shadow-2xl sm:p-8'
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        onClick={(event) => event.stopPropagation()}
      >
        <MacButtons onClose={onClose} />
        <h2 className='mt-6 text-xl font-bold sm:text-2xl'>{title}</h2>
        <p className='mt-4 text-sm leading-6 opacity-80'>{intro}</p>
        <ul className='mt-6 flex list-disc flex-col gap-3 pl-5 text-sm leading-6 opacity-90'>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
