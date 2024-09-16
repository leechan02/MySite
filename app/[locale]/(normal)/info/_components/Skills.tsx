"use client";
import Chip from "@/components/chip/Chip";
import { FiPlusCircle, FiXCircle } from "react-icons/fi";
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
        { skill: "C/C++", description: "C로 파싱 구현 가능" },
        { skill: "JavaScript", description: "바닐라 SPA 페이지 구현 가능" },
        { skill: "TypeScript", description: "타입 구현 가능" },
      ],
    },
    {
      title: "Frontend",
      skills: "React, Next.js, React Query, Redux, TailwindCSS, Framer Motion",
      details: [
        { skill: "React", description: "컴포넌트 기반 개발 가능" },
        { skill: "Next.js", description: "SSR 및 정적 사이트 생성 가능" },
        { skill: "React Query", description: "서버 상태 관리 가능" },
        { skill: "Redux", description: "전역 상태 관리 가능" },
        { skill: "TailwindCSS", description: "반응형 디자인 구현 가능" },
        { skill: "Framer Motion", description: "고급 애니메이션 구현 가능" },
      ],
    },
    {
      title: "Tools",
      skills: "Git/GitHub, Figma, Slack, Notion, Visual Studio Code",
      details: [
        { skill: "Git/GitHub", description: "버전 관리 및 협업 가능" },
        { skill: "Figma", description: "UI/UX 디자인 작업 가능" },
        { skill: "Slack", description: "팀 커뮤니케이션 도구 사용 가능" },
        { skill: "Notion", description: "문서화 및 프로젝트 관리 가능" },
        { skill: "Visual Studio Code", description: "효율적인 코드 편집 가능" },
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
              <AnimatePresence initial={false} mode="wait">
                {openPopup === skill.title ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    exit={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiXCircle className='text-foreground opacity-50' />
                  </motion.div>
                ) : (
                  <motion.div
                    key="plus"
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiPlusCircle className='text-foreground opacity-50' />
                  </motion.div>
                )}
              </AnimatePresence>
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