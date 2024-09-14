import Link from "next/link";
import { FiGithub, FiMail, FiYoutube } from "react-icons/fi";
import About from "./_components/About";
import Education from "./_components/Education";
import Skills from "./_components/Skills";
import Etc from "./_components/Etc";

export default async function Info() {
  return (
    <div className='flex flex-col justify-center items-center gap-16'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-xl sm:text-3xl font-bold font-mono text-foreground'>
          Hello I&apos;m Euichan Lee
        </h1>
        <div className='flex justify-center items-center gap-10'>
          <Link href='mailto:lechan1317@gmail.com'>
            <FiMail className='inline text-foreground' size={20} />
          </Link>
          <Link href='https://github.com/leechan02' target='_blank'>
            <FiGithub className='inline text-foreground' size={20} />
          </Link>
          <Link href='https://www.youtube.com/@euiclee' target='_blank'>
            <FiYoutube className='inline text-foreground' size={20} />
          </Link>
        </div>
      </div>
      <h1 className='w-[320px] sm:w-[640px] lg:w-[900px] text-xl sm:text-3xl font-black font-mono text-foreground text-center px-2'>
        I enjoy defining problems and finding solutions to make the world a bit
        more convenient.
      </h1>
      <About />
      <div className='w-[320px] sm:w-[640px] lg:w-[900px] border border-foreground opacity-10' />
      <Education />
      <div className='w-[320px] sm:w-[640px] lg:w-[900px] border border-foreground opacity-10' />
      <Skills />
      <div className='w-[320px] sm:w-[640px] lg:w-[900px] border border-foreground opacity-10' />
      <Etc />
    </div>
  );
}
