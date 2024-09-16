import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

interface SkillPopupProps {
  title: string;
  details: { skill: string; description: string }[];
  onClose: () => void;
}

export default function SkillPopup({ title, details, onClose }: SkillPopupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        className="bg-background border border-foreground/10 rounded-lg p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-foreground opacity-50 hover:opacity-100">
            <FiX size={24} />
          </button>
        </div>
        <div className="space-y-4">
          {details.map((detail, index) => (
            <div key={index}>
              <h3 className="font-bold">{detail.skill}</h3>
              <p className="text-sm opacity-70">{detail.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}