import Link from "next/link";
import NavBar from "../nav/NavBar";
import { FiPrinter } from "react-icons/fi";

export default function Header() {
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
        <Link href='/Resume(En).pdf' target='_blank' rel='noopener noreferrer'>
          <span className='hidden sm:inline'>Resume</span>
          <FiPrinter className='sm:hidden text-foreground' size={20} />
        </Link>
      </div>
    </header>
  );
}
