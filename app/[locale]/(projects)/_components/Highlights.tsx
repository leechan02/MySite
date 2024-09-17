"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface MediaItem {
  type: 'video' | 'image';
  src: string;
  alt?: string;
}

interface HighlightsProps {
  bgColor: string;
  project: string;
  mediaItems: MediaItem[];
}

export default function Highlights({ project, bgColor, mediaItems }: HighlightsProps) {
  const t = useTranslations(project);

  const renderMediaItem = (item: MediaItem, index: number) => {
    const commonClasses = `w-full rounded-2xl ${bgColor} bg-opacity-20 overflow-hidden max-w-4xl p-4 sm:p-8 lg:p-16`;

    if (item.type === 'video') {
      return (
        <div key={index} className={commonClasses}>
          <div className='aspect-video w-full max-w-2xl mx-auto overflow-hidden rounded-2xl'>
            <video
              className='w-full h-full object-cover'
              autoPlay
              loop
              muted
              playsInline
              preload='auto'
            >
              <source src={item.src} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
    } else {
      return (
        <div key={index} className={commonClasses}>
          <Image
            src={item.src}
            width={600}
            height={400}
            alt={item.alt || 'Project highlight'}
            className='w-full h-full object-cover'
          />
        </div>
      );
    }
  };

  return (
    <div className='bg-foreground/5 shadow border-2 border-foreground/10 rounded-2xl sm:rounded-[40px] backdrop-blur-[15px] p-4 sm:p-6 lg:p-8 w-full flex flex-col justify-center items-center gap-4 sm:gap-6 font-mono'>
      <div className='text-xs sm:text-sm opacity-50 font-bold'>
        HIGHLIGHTS
      </div>
      <div className='text-sm sm:text-base font-bold text-center'>
        {t("highlights")}
      </div>
      {mediaItems.map((item, index) => renderMediaItem(item, index))}
    </div>
  );
}