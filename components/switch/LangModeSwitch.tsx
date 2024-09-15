"use client";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LangModeSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const isKorean = locale === "ko";
  
  const handleToggle = () => {
    const nextLocale = locale === "en" ? "ko" : "en";
    
    // 현재 경로에서 첫 번째 부분(언어)을 제외한 나머지 경로를 가져옵니다.
    const newPathname = pathname.split('/').slice(2).join('/');
    
    // 새로운 경로를 생성합니다. 새 언어 + 현재 경로
    const newPath = `/${nextLocale}${newPathname ? `/${newPathname}` : ''}`;
    
    router.replace(newPath);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="w-14 h-8 bg-white/5 rounded-full shadow border-2 border-white/30 backdrop-blur-[15px] relative flex items-center"
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute left-0 flex items-center justify-center w-8 h-8"
        animate={{
          x: isKorean ? "20px" : "0px",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div 
          className="w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center text-foreground font-semibold text-xs font-mono"
        >
          {isKorean ? "Kr" : "En"}
        </div>
      </motion.div>
    </motion.button>
  );
}