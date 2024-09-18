"use client";
import React, { Suspense } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Code from "./Code"; // Code 컴포넌트 import

interface ContentProps {
  project: string;
  title: string;
  content: string;
  media: {
    type: "image" | "code";
    src?: string;
    code?: string;
    language?: string;
    explanation?: string;
  };
}

const ImageSkeleton = () => (
  <div className='w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gray-200 animate-pulse rounded-2xl sm:rounded-[40px]' />
);

const ImageComponent = ({ src, alt }: { src: string; alt: string }) => (
  <div className='w-full'>
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      style={{
        width: "100%",
        height: "auto",
      }}
      className='rounded-2xl sm:rounded-[40px]'
    />
  </div>
);

export default function Content({
  project,
  title,
  content,
  media,
}: ContentProps) {
  const t = useTranslations(project);

  return (
    <div className='flex flex-col justify-center items-center gap-6 sm:gap-16 w-full'>
      <div className='flex flex-col sm:flex-row justify-between items-start font-mono text-foreground w-full gap-8'>
        <div className='w-full sm:w-1/2 text-lg sm:text-xl font-bold'>
          {t(title)}
        </div>
        <div className='w-full sm:w-1/2 flex flex-col text-xs opacity-50 gap-4'>
          {t.raw(content).map((item: string, index: number) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
      <div className='w-full'>
        {media.type === "image" ? (
          <div className='bg-foreground/5 shadow border-2 border-foreground/10 rounded-2xl sm:rounded-[40px] backdrop-blur-[15px] w-full overflow-hidden'>
            <Suspense fallback={<ImageSkeleton />}>
              <ImageComponent src={media.src || ""} alt={t(title)} />
            </Suspense>
          </div>
        ) : (
          <Code
            code={media.code || ""}
            language={media.language || "javascript"}
            explanation={media.explanation || ""}
            project={project}
          />
        )}
      </div>
    </div>
  );
}
