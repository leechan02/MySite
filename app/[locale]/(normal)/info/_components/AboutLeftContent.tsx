import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutLeftContent() {
  const t = useTranslations("info.about");
  return (
    <div className='flex flex-col justify-center items-center gap-16 w-[300px] lg:w-[400px]'>
      <div className='flex flex-col justify-center items-start gap-4'>
        <div className='text-sm font-mono text-foreground font-bold'>
          {t("leftFirstTitle")}
        </div>
        {t.raw("leftFirstContent").map((member: string, index: number) => (
          <div
            key={index}
            className='text-xs font-mono text-foreground opacity-50'
          >
            {member}
          </div>
        ))}
      </div>
      <div className='relative w-[300px] lg:w-[400px] h-[400px] border-10 border-color1 rounded-[40px] overflow-hidden'>
        <Image
          src='/image/mountain.jpg'
          alt='profile'
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className='flex flex-col justify-center items-start gap-4'>
        <div className='text-sm font-mono text-foreground font-bold'>
          {t("leftSecondTitle")}
        </div>
        {t.raw("leftSecondContent").map((member: string, index: number) => (
          <div
            key={index}
            className='text-xs font-mono text-foreground opacity-50'
          >
            {member}
          </div>
        ))}
      </div>
      <div className='relative w-[300px] lg:w-[400px] h-[400px] border-10 border-color1 rounded-[40px] overflow-hidden'>
        <Image
          src='/image/street.jpeg'
          alt='profile'
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
