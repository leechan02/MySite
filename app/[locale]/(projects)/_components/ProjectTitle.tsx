"use client";
import Image from "next/image";
import Link from "next/link";
import { FiCompass, FiGithub } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { Suspense } from 'react';

interface ProjectTitleProps {
  link: string;
  deploy?: string;
  image: string;
  project: string;
  brColor: string;
}

const ImageSkeleton = () => (
  <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-3xl" />
);

const ImageComponent = ({ src, alt, brColor }: { src: string; alt: string; brColor: string }) => (
  <div className='relative w-full rounded-3xl overflow-hidden flex justify-center items-center p-8'>
    <div
      className={`absolute inset-0 border-4 sm:border-8 ${brColor} border-opacity-50 rounded-3xl pointer-events-none`}
    ></div>
    <Image src={src} width={600} height={400} alt={alt} />
    <div className='absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-background from-10% to-transparent' />
  </div>
);

export default function ProjectTitle({
  link,
  image,
  project,
  brColor,
  deploy,
}: ProjectTitleProps) {
  const t = useTranslations(project);

  return (
    <div className='flex flex-col gap-10 w-full'>
      <div className='flex flex-col text-center gap-4'>
        <h1 className='text-4xl sm:text-5xl font-bold'>{t("title")}</h1>
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
      <Suspense fallback={<ImageSkeleton />}>
        <ImageComponent src={image} alt={t("title")} brColor={brColor} />
      </Suspense>
    </div>
  );
}