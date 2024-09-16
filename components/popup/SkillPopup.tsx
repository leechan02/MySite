import { motion } from "framer-motion";
import MacButtons from "../button/MacButtons";

interface SkillPopupProps {
  title: string;
  details: { skill: string; description: string }[];
  onClose: () => void;
}

export default function SkillPopup({
  title,
  details,
  onClose,
}: SkillPopupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
      onClick={onClose}
    >
      <motion.div
        className='bg-foreground/5 shadow border-2 border-foreground/10 rounded-[40px] backdrop-blur-[15px] p-6 px-8 w-full max-w-md font-mono'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex flex-col items-start gap-4'>
          <MacButtons onClose={onClose} />
          <h2 className='text-xl font-bold'>{title}</h2>
          {details.map((detail, index) => (
            <div key={index} className="flex flex-col gap-1">
              <h3 className='text-sm font-bold'>{detail.skill}</h3>
              <p className='text-xs opacity-50'>{detail.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
