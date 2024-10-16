import { FiMail, FiPrinter } from "react-icons/fi";
import DarkModeSwitch from "./switch/DarkModeSwitch";
import LangModeSwitch from "./switch/LangModeSwitch";
import { getLastUpdateTime } from "@/lib/github/github";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const lastUpdateTime = getLastUpdateTime();
  const t = useTranslations("resume");

  return (
    <footer className='w-full px-8 sm:px-28 py-8 sm:py-16 bg-secondary dark:bg-primary rounded-t-[40px] flex-col justify-center items-center inline-flex'>
      <div className='self-stretch flex-col justify-start items-center gap-10 flex'>
        <div className='self-stretch justify-between items-center inline-flex'>
          <div className='justify-start items-center gap-4 sm:gap-12 flex'>
            <div className='flex-col justify-start items-start gap-4 inline-flex'>
              <div className='self-stretch text-foreground opacity-50 text-[8px] font-medium font-[family-name:var(--font-geist-mono)]'>
                MAIN
              </div>
              <Link href='/'>
                <div className='self-stretch h-4 py-[3px] justify-center items-center inline-flex'>
                  <div className='text-center text-foreground text-xs font-medium font-[family-name:var(--font-geist-mono)]'>
                    Work
                  </div>
                </div>
              </Link>
              <Link href='/info'>
                <div className='self-stretch h-4 justify-center items-center gap-2.5 inline-flex'>
                  <div className='grow shrink basis-0 text-foreground text-xs font-medium font-[family-name:var(--font-geist-mono)]'>
                    Info
                  </div>
                </div>
              </Link>
            </div>
            <div className='w-[150px] flex-col justify-start items-start gap-4 inline-flex'>
              <div className='text-center text-foreground opacity-50 text-[8px] font-medium font-[family-name:var(--font-geist-mono)]'>
                CONTACT
              </div>
              <Link
                href={t("resume")}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='justify-start items-center gap-2 inline-flex'>
                  <FiPrinter className='w-4 h-4 text-foreground' />
                  <div className='text-center text-foreground text-xs font-medium font-[family-name:var(--font-geist-mono)]'>
                    Resume
                  </div>
                </div>
              </Link>
              <Link href='mailto:lechan1317@gmail.com'>
                <div className='justify-start items-center gap-2 inline-flex'>
                  <FiMail className='w-4 h-4 text-foreground' />
                  <div className='text-center text-foreground text-xs font-medium font-[family-name:var(--font-geist-mono)]'>
                    lechan137@gmail.com
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='w-14 flex-col justify-start items-start gap-2 inline-flex'>
            <DarkModeSwitch />
            <LangModeSwitch />
          </div>
        </div>
        <div className='flex-col justify-center items-center gap-2 flex'>
          <div className='self-stretch text-center text-foreground opacity-50 text-xs font-medium font-[family-name:var(--font-geist-mono)]'>
            Last updated by Euiclee on {lastUpdateTime} KST
          </div>
          <div className='self-stretch text-center text-foreground text-xs font-medium font-[family-name:var(--font-geist-mono)]'>
            © 2024 Euichan Lee. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
