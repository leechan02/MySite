import React from "react";

interface EduContentProps {
  title: string;
  location: string;
  date: string;
  description: string;
}

export default function EduContent({
  title,
  location,
  date,
  description,
}: EduContentProps) {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between items-start font-mono text-foreground w-full gap-4'>
      <div className='text-2xl sm:text-3xl font-bold sm:w-1/2'>{title}</div>
      <div className='flex flex-col justify-start items-start gap-2 sm:w-1/2 sm:items-end'>
        <div className='font-bold text-lg sm:text-xl'>{location}</div>
        <div className='text-sm font-bold opacity-50'>{date}</div>
        <div className='text-xs opacity-80 sm:text-right'>{description}</div>
      </div>
    </div>
  );
}
