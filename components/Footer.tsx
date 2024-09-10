import { FiMail, FiPrinter } from "react-icons/fi";
import DarkModeSwitch from "./switch/DarkModeSwitch";
import LangModeSwitch from "./switch/LangModeSwitch";

export default function Footer() {
  return (
    <div className='w-full h-[271px] px-28 py-16 bg-[#353535] rounded-tl-[40px] rounded-tr-[40px] flex-col justify-center items-center gap-2.5 inline-flex'>
      <div className='self-stretch h-[143px] flex-col justify-start items-center gap-10 flex'>
        <div className='self-stretch justify-between items-center inline-flex'>
          <div className='justify-start items-center gap-12 flex'>
            <div className='flex-col justify-start items-start gap-4 inline-flex'>
              <div className="self-stretch text-white/50 text-[8px] font-medium font-[family-name:var(--font-geist-mono)] leading-[9.60px]">
                MAIN
              </div>
              <div className='self-stretch h-4 py-[3px] justify-center items-center inline-flex'>
                <div className="text-center text-white text-xs font-medium font-[family-name:var(--font-geist-mono)] leading-[14.40px]">
                  Work
                </div>
              </div>
              <div className='self-stretch h-4 justify-center items-center gap-2.5 inline-flex'>
                <div className="grow shrink basis-0 text-white text-xs font-medium font-[family-name:var(--font-geist-mono)] leading-[14.40px]">
                  Info
                </div>
              </div>
            </div>
            <div className='w-[150px] flex-col justify-start items-start gap-4 inline-flex'>
              <div className="text-center text-white/50 text-[8px] font-medium font-[family-name:var(--font-geist-mono)] leading-[9.60px]">
                CONTACT
              </div>
              <div className='justify-start items-center gap-2 inline-flex'>
                <FiPrinter className='w-4 h-4 text-white' />
                <div className="text-center text-white text-xs font-medium font-[family-name:var(--font-geist-mono)] leading-[14.40px]">
                  Resume
                </div>
              </div>
              <div className='justify-start items-center gap-2 inline-flex'>
                <FiMail className='w-4 h-4 text-white' />
                <div className="text-center text-white text-xs font-medium font-[family-name:var(--font-geist-mono)] leading-[14.40px]">
                  lechan137@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className='w-14 flex-col justify-start items-start gap-2 inline-flex'>
            <DarkModeSwitch />
            <LangModeSwitch />
          </div>
        </div>
        <div className='h-[31px] flex-col justify-center items-center gap-2 flex'>
          <div className="self-stretch text-center text-white/50 text-xs font-medium font-[family-name:var(--font-geist-mono)] leading-[14.40px]">
            Last updated by Euiclee on Sep 5, 2024, 9:51 PM KST
          </div>
          <div className="self-stretch text-center text-white text-xs font-medium font-[family-name:var(--font-geist-mono)] leading-[14.40px]">
            © 2024 Euichan Lee. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}