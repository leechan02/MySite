import Image from "next/image";
import React, { Suspense } from "react";

interface ImageBoxProps {
  src: string;
  alt: string;
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

export default function ImageBox({ src, alt }: ImageBoxProps) {
  return (
    <div className='bg-foreground/5 shadow border-2 border-foreground/10 rounded-2xl sm:rounded-[40px] backdrop-blur-[15px] w-full overflow-hidden'>
      <Suspense fallback={<ImageSkeleton />}>
        <ImageComponent src={src} alt={alt} />
      </Suspense>
    </div>
  );
}
