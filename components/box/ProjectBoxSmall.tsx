"use client";

import React, { useState } from "react";
import MacButtons from "../button/MacButtons";
import Link from "next/link";

interface ProjectBoxSmallProps {
  title: string;
  description: string;
  date: string;
  video: string;
  bgColor: string;
  link: string;
}

export default function ProjectBoxSmall({
  title,
  description,
  date,
  video,
  bgColor,
  link,
}: ProjectBoxSmallProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-[320px] xl:w-[400px] h-[600px] rounded-[40px] shadow-md flex justify-center items-center ${bgColor} relative overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className='w-[240px] xl:w-[280px] h-[400px] xl:h-[360px] rounded-2xl overflow-hidden relative z-10'
        style={{ filter: "drop-shadow(0 54px 60px rgba(0, 0, 0, 0.25))" }}
      >
        <video
          className='w-full h-full object-cover'
          autoPlay
          loop
          muted
          playsInline
          preload='auto'
        >
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      {isHovered && (
        <Link href={link}>
          <div className='absolute inset-0 bg-primary bg-opacity-50 flex flex-col justify-center items-start text-white font-mono z-20'>
            <div className='flex flex-col justify-between items-start p-6 lg:p-8 h-full'>
              <div className='flex flex-col justify-center items-start gap-4'>
                <MacButtons />
                <h2 className='text-3xl lg:text-4xl font-bold'>{title}</h2>
              </div>
              <div className='flex flex-col justify-center items-start gap-1'>
                <p className='text-lg lg:text-xl font-bold'>{description}</p>
                <p className='text-xs text-white/70'>{date}</p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
