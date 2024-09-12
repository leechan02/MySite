"use client";

import React, { useState } from "react";
import MacButtons from "../button/MacButtons";

interface ProjectBoxSmallProps {
  title: string;
  description: string;
  date: string;
  video: string;
  bgColor: string;
}

export default function ProjectBoxSmall({
  title,
  description,
  date,
  video,
  bgColor,
}: ProjectBoxSmallProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-[400px] h-[600px] rounded-[40px] shadow-md flex justify-center items-center ${bgColor} relative overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className='w-[280px] h-[320px] rounded-2xl overflow-hidden relative z-10'
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
        <div className='absolute inset-0 bg-primary bg-opacity-50 flex flex-col justify-center items-start text-white font-mono z-20'>
          <div className='flex flex-col justify-between items-start p-8 h-full'>
            <div className='flex flex-col justify-center items-start gap-4'>
              <MacButtons />
              <h2 className='text-4xl font-bold'>{title}</h2>
            </div>
            <div className='flex flex-col justify-center items-start gap-1'>
              <p className='text-xl font-bold'>{description}</p>
              <p className='text-xs text-white/70'>{date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
