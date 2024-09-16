"use client";
import Chip from "@/components/chip/Chip";
import { FiPlusCircle } from "react-icons/fi";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillPopup from "@/components/popup/SkillPopup"
import { useTranslations } from "next-intl";

interface SkillDetail {
  skill: string;
  description: string;
}

interface SkillCategory {
  title: string;
  skills: string;
  details: SkillDetail[];
}

export default function Skills() {
  const t = useTranslations("info.skills");
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  const skillsData = useMemo(() => {
    return [
      {
        title: t('language.title'),
        skills: t('language.skills'),
        details: (t.raw('language.details') as SkillDetail[]).map((detail) => ({
          skill: detail.skill,
          description: detail.description
        })),
      },
      {
        title: t('frontend.title'),
        skills: t('frontend.skills'),
        details: (t.raw('frontend.details') as SkillDetail[]).map((detail) => ({
          skill: detail.skill,
          description: detail.description
        })),
      },
      {
        title: t('tools.title'),
        skills: t('tools.skills'),
        details: (t.raw('tools.details') as SkillDetail[]).map((detail) => ({
          skill: detail.skill,
          description: detail.description
        })),
      },
    ] as SkillCategory[];
  }, [t]);

  return (
    <div className='flex flex-col justify-center items-start w-full max-w-[300px] sm:max-w-[640px] lg:max-w-[900px] gap-8 sm:gap-16'>
      <Chip label='SKILLS' />
      {skillsData.map((skill, index) => (
        <div key={index} className='flex flex-col justify-start items-start gap-2 font-mono text-foreground w-full'>
          <div className='flex items-center gap-2 w-full justify-between'>
            <div className='text-sm font-bold'>{skill.title}</div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpenPopup(openPopup === skill.title ? null : skill.title)}
            >
              <motion.div
                animate={{ rotate: openPopup === skill.title ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiPlusCircle className='text-foreground opacity-50' />
              </motion.div>
            </motion.div>
          </div>
          <div className='text-xs font-bold opacity-50'>
            {skill.skills}
          </div>
        </div>
      ))}
      <AnimatePresence>
        {openPopup && (
          <SkillPopup
            title={openPopup}
            details={skillsData.find(skill => skill.title === openPopup)?.details || []}
            onClose={() => setOpenPopup(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}