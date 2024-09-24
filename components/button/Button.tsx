"use client";
import { motion } from 'framer-motion';

interface ButtonProps {
  label: string;
  icon?: React.ElementType | string;
}

export default function Button({
  label,
  icon: Icon,
}: ButtonProps) {
  return (
    <motion.div
      className="flex justify-center items-center gap-2 rounded-full border-2 border-foreground/5 backdrop-blur-md py-2 pl-4 pr-6"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {Icon && <Icon className="w-4 h-4 text-foreground" />}
      <div className="font-semibold font-mono text-foreground font-xs">{label}</div>
    </motion.div>
  );
}