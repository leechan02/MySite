"use client"
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiFile } from "react-icons/fi";
import Code from "@/components/content/Code";

interface CodeItem {
  code: string;
  language: string;
  codeEx?: string;
  label: string;
}

interface CodeSectionProps {
  codeItems: CodeItem[];
  project: string;
}

export default function CodeSection({
  codeItems,
  project
}: CodeSectionProps) {
  const [activeCodeIndex, setActiveCodeIndex] = useState(0);
  return (
    <div className='flex flex-col sm:flex-row w-full gap-8'>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCodeIndex}
          initial={{ opacity: 1, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="w-full sm:w-1/2"
        >
          <Code
            project={project}
            code={codeItems[activeCodeIndex].code}
            language={codeItems[activeCodeIndex].language}
            codeEx={codeItems[activeCodeIndex].codeEx}
          />
        </motion.div>
      </AnimatePresence>
      <div className='w-full sm:w-1/2 flex justify-center items-center'>
        <div className='grid grid-cols-2 gap-4 gap-y-8 justify-items-center'>
          {codeItems.map((item, index) => (
            <motion.div 
              key={index}
              className='flex flex-col justify-center items-center gap-2 cursor-pointer'
              onClick={() => setActiveCodeIndex(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiFile 
                className={`text-4xl transition-colors duration-300 ${
                  activeCodeIndex === index 
                    ? 'text-foreground' 
                    : 'text-foreground opacity-40'
                }`} 
              />
              <div 
                className={`text-xs font-mono transition-colors duration-300 text-center ${
                  activeCodeIndex === index 
                    ? 'text-foreground' 
                    : 'text-foreground opacity-40'
                }`}
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}