"use client";
import Image from "next/image";
import Link from "next/link";
import { FiCompass, FiGithub } from "react-icons/fi";
import { useTranslations } from "next-intl";

interface ContentProps {
  link: string;
  deploy?: string;
  image: string;
  project: string;
  brColor: string;
}

export default function Content({
  link,
  image,
  project,
  brColor,
  deploy,
}: ContentProps) {
  const t = useTranslations(project);

  return (
    <div className='flex flex-col gap-10 w-full'>
      <div className='flex flex-col text-center gap-4'>
        <h1 className='text-5xl font-bold'>{t("title")}</h1>
        <div className='font-bold opacity-50'>{t("date")}</div>
        <div className='flex justify-center items-center gap-10'>
          <Link href={link} target='_blank'>
            <FiGithub className='inline text-foreground' size={20} />
          </Link>
          {deploy && (
            <Link href={deploy} target='_blank'>
              <FiCompass className='inline text-foreground' size={20} />
            </Link>
          )}
        </div>
      </div>
      <div className='relative w-full rounded-3xl overflow-hidden flex justify-center items-center p-8'>
        <div
          className={`absolute inset-0 border-8 ${brColor} border-opacity-50 rounded-3xl pointer-events-none`}
        ></div>
        <Image src={image} width={600} height={400} alt='webserv' />
        <div className='absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-background from-10% to-transparent' />
      </div>
    </div>
  );
}
