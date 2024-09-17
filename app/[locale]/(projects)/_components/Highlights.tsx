import Image from "next/image";
import { useTranslations } from "next-intl";

interface HighlightsProps {
  bgColor: string;
  project: string;
}

export default function Highlights({ project, bgColor }: HighlightsProps) {
  const t = useTranslations(project);

  return (
    <div className='bg-foreground/5 shadow border-2 border-foreground/10 rounded-2xl sm:rounded-[40px] backdrop-blur-[15px] p-4 sm:p-6 lg:p-8 w-full flex flex-col justify-center items-center gap-4 sm:gap-6 font-mono'>
      <div className='text-xs sm:text-sm opacity-50 font-bold'>
        {t("title")}
      </div>
      <div className='text-sm sm:text-base font-bold text-center'>
        {t("highlights")}
      </div>
      <div
        className={`w-full max-w-4xl p-4 sm:p-8 lg:p-16 rounded-2xl sm:rounded-[40px] ${bgColor} bg-opacity-20`}
      >
        <div className='aspect-video w-full max-w-2xl mx-auto overflow-hidden rounded-lg'>
          <video
            className='w-full h-full object-cover'
            autoPlay
            loop
            muted
            playsInline
            preload='auto'
          >
            <source src='/video/webserv_page.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div
        className={`w-full rounded-2xl sm:rounded-[40px] ${bgColor} bg-opacity-20 overflow-hidden`}
      >
        <Image
          src='/image/webserv/webserv.png'
          width={600}
          height={400}
          alt='webserv'
          className='w-full h-auto object-cover'
        />
      </div>
    </div>
  );
}
