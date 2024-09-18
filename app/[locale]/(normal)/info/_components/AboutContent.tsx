import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fragment, Suspense } from "react";

interface ContentSection {
  title: string;
  content: string;
  image: string;
}

interface AboutContentProps {
  sections: ContentSection[];
}

const ImageSkeleton = () => (
  <div className='relative w-[300px] lg:w-[400px] h-[400px] rounded-[40px] overflow-hidden'>
    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
  </div>
);

const ImageComponent = ({ src, alt }: { src: string; alt: string }) => (
  <div className='relative w-[300px] lg:w-[400px] h-[400px] rounded-[40px] overflow-hidden'>
    <Image
      src={src}
      alt={alt}
      fill
      style={{ objectFit: "cover" }}
    />
  </div>
);

export default function AboutContent({ sections }: AboutContentProps) {
  const t = useTranslations("info.about");

  return (
    <div className='flex flex-col justify-center items-center gap-16 w-[300px] lg:w-[400px]'>
      {sections.map((section, sectionIndex) => (
        <Fragment key={sectionIndex}>
          {section.title && (
            <div className='flex flex-col justify-center items-start gap-4'>
              <div className='text-sm font-mono text-foreground font-bold'>
                {t(section.title)}
              </div>
              {t.raw(section.content).map((item: string, index: number) => (
                <div
                  key={index}
                  className='text-xs font-mono text-foreground opacity-50'
                >
                  {item}
                </div>
              ))}
            </div>
          )}
          {section.image && (
            <Suspense fallback={<ImageSkeleton />}>
              <ImageComponent src={section.image} alt='content image' />
            </Suspense>
          )}
        </Fragment>
      ))}
    </div>
  );
}