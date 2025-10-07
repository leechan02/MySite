import Link from "next/link";
import { FiArchive, FiGithub, FiMail, FiYoutube } from "react-icons/fi";
import About from "./_components/About";
import Education from "./_components/Education";
import Skills from "./_components/Skills";
import Etc from "./_components/Etc";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import WorkExperience from "./_components/WorkExperience";

export default function Info({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("info");

  return (
    <div className='flex flex-col justify-center items-center gap-16'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-xl sm:text-3xl font-bold font-mono text-foreground'>
          {t("mainTitle")}
        </h1>
        <div className='flex justify-center items-center gap-10'>
          <Link href='mailto:lechan1317@gmail.com'>
            <FiMail className='inline text-foreground' size={20} />
          </Link>
          <Link href='https://github.com/leechan02' target='_blank'>
            <FiGithub className='inline text-foreground' size={20} />
          </Link>
          <Link href='https://www.youtube.com/@euiclee_archive' target='_blank'>
            <FiYoutube className='inline text-foreground' size={20} />
          </Link>
          <Link href='https://euiclee.notion.site' target='_blank'>
            <FiArchive className='inline text-foreground' size={20} />
          </Link>
        </div>
      </div>
      <About />
      <div className='w-[320px] sm:w-[640px] lg:w-[900px] border border-foreground opacity-10' />
      <WorkExperience />
      <div className='w-[320px] sm:w-[640px] lg:w-[900px] border border-foreground opacity-10' />
      <Education />
      <div className='w-[320px] sm:w-[640px] lg:w-[900px] border border-foreground opacity-10' />
      <Skills />
      <div className='w-[320px] sm:w-[640px] lg:w-[900px] border border-foreground opacity-10' />
      <Etc />
    </div>
  );
}
