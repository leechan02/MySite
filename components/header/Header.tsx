import Link from "next/link";
import NavBar from "../nav/NavBar";
import { FiPrinter, FiArrowUpRight } from "react-icons/fi";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations('resume');
  return (
    <header className='flex justify-between items-center px-8 sm:px-16 py-10'>
      <div className='text-foreground text-base font-bold font-mono w-1/3 flex justify-start'>
        <span className='hidden sm:inline'>Euichan Lee</span>
        <span className='sm:hidden'>EL</span>
      </div>
      <div className='w-1/3 flex justify-center'>
        <NavBar />
      </div>
      <div className='text-foreground text-base font-bold font-mono w-1/3 flex justify-end'>
        <Link href={t("resume")} target='_blank' rel='noopener noreferrer' className='flex items-center gap-0.5'>
          <span className='hidden sm:inline'>Resume</span>
          <FiArrowUpRight className='hidden sm:inline animate-bounce-arrow' size={18} />
          <FiPrinter className='sm:hidden text-foreground' size={20} />
        </Link>
      </div>
    </header>
  );
}
