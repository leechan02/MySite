import Link from "next/link";
import { FiGithub, FiMail, FiYoutube } from "react-icons/fi";

export default async function Info() {
  return (
    <div className='flex flex-col justify-center items-center gap-16 px-16'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-3xl font-bold font-mono text-foreground'>
          Hello I'm Euichan Lee
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
    </div>
  );
}
