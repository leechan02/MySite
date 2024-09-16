"use client";
import Chip from "@/components/chip/Chip";
import { FiPlusCircle } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillPopup from "@/components/popup/SkillPopup"

export default function Skills() {
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  const skillsData = [
    {
      title: "Language",
      skills: "C/C++, JavaScript, TypeScript",
      details: [
        { skill: "C/C++", description: "Capable of implementing parsers in C" },
        { skill: "JavaScript", description: "Can build vanilla SPA pages" },
        { skill: "TypeScript", description: "Proficient in implementing types" },
      ],
    },
    {
      title: "Frontend",
      skills: "React, Next.js, React Query, Redux, TailwindCSS, Framer Motion",
      details: [
        { skill: "React", description: "Experienced in component-based development" },
        { skill: "Next.js", description: "Capable of SSR and static site generation" },
        { skill: "React Query", description: "Proficient in server state management" },
        { skill: "Redux", description: "Skilled in global state management" },
        { skill: "TailwindCSS", description: "Can implement responsive designs" },
        { skill: "Framer Motion", description: "Able to create advanced animations" },
      ],
    },
    {
      title: "Tools",
      skills: "Git/GitHub, Figma, Slack, Notion, Visual Studio Code",
      details: [
        { skill: "Git/GitHub", description: "Proficient in version control and collaboration" },
        { skill: "Figma", description: "Capable of UI/UX design work" },
        { skill: "Slack", description: "Experienced with team communication tools" },
        { skill: "Notion", description: "Skilled in documentation and project management" },
        { skill: "Visual Studio Code", description: "Efficient in code editing" },
      ],
    },
  ];

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