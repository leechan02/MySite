"use client";

import Chip from "@/components/chip/Chip";
import WorkExperiencePopup from "./WorkExperiencePopup";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlusCircle } from "react-icons/fi";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function WorkExperience() {
  const t = useTranslations("info.workExperience");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-col justify-center items-start w-[300px] sm:w-[640px] lg:w-[900px] gap-8 sm:gap-16'>
      <Chip label='WORK EXPERIENCE' />
      <div className='flex flex-col gap-8 sm:gap-16 w-full'>
        <div className='flex w-full items-start justify-between gap-4 font-mono text-foreground'>
          <div className='flex flex-col items-start gap-2'>
            <div className='text-lg font-bold'>{t("first")}</div>
            <div className='text-sm font-bold opacity-50'>{t("firstDate")}</div>
            <div className='text-xs opacity-80'>{t("firstContent")}</div>
          </div>
          <motion.button
            aria-label={t("openDetails")}
            className='shrink-0'
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiPlusCircle className='text-foreground opacity-50' />
            </motion.div>
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <WorkExperiencePopup
            title={t("detailsTitle")}
            intro={t("detailsIntro")}
            highlights={t.raw("detailsHighlights") as string[]}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
