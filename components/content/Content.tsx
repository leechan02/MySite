"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Suspense } from "react";

interface ContentProps {
  project: string;
  title: string;
  content: string;
  imageSrc: string;
}

const ImageSkeleton = () => (
  <div className='w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gray-200 animate-pulse rounded-2xl sm:rounded-[40px]' />
);

const ImageComponent = ({ src, alt }: { src: string; alt: string }) => (
  <div className='w-full'>
    <Image
      src={src}
      alt={alt}
      width={1200}  // 이미지의 원본 너비
      height={800}  // 이미지의 원본 높이
      style={{
        width: '100%',
        height: 'auto',
      }}
      className='rounded-2xl sm:rounded-[40px]'
    />
  </div>
);

export default function Content({
  project,
  title,
  content,
  imageSrc,
}: ContentProps) {
  const t = useTranslations(project);
  return (
    <div className='flex flex-col justify-center items-center gap-6 sm:gap-16 w-full'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-start font-mono text-foreground w-full'>
        <div className='w-full sm:w-1/2 pr-0 sm:pr-4 mb-4 sm:mb-0'>
          <div className='text-lg sm:text-xl font-bold'>{t(title)}</div>
        </div>
        <div className='w-full sm:w-1/2 pl-0 sm:pl-4 flex flex-col text-xs opacity-50 gap-4'>
          {t.raw(content).map((item: string, index: number) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
      <div className='bg-foreground/5 shadow border-2 border-foreground/10 rounded-2xl sm:rounded-[40px] backdrop-blur-[15px] w-full overflow-hidden'>
        <Suspense fallback={<ImageSkeleton />}>
          <ImageComponent src={imageSrc} alt={t(title)} />
        </Suspense>
      </div>
    </div>
  );
}