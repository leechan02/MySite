import Chip from '@/components/chip/Chip';
import React from 'react';

export default function Education() {
  return (
    <div className='flex flex-col justify-center items-start w-[300px] sm:w-[640px] lg:w-[900px] gap-8 sm:gap-16'>
      <Chip label='EDUCATION' />
      <div className='flex flex-col gap-8 sm:gap-16 w-full'>
        <div className='flex flex-col sm:flex-row sm:justify-between items-start font-mono text-foreground w-full gap-4'>
          <div className='text-2xl sm:text-3xl font-bold sm:w-1/2'>42 Seoul</div>
          <div className='flex flex-col justify-start items-start gap-2 sm:w-1/2 sm:items-end'>
            <div className='font-bold text-lg sm:text-xl'>Seoul, Korea</div>
            <div className='text-sm font-bold opacity-50'>July 2022 - July 2024</div>
            <div className='text-xs opacity-80 sm:text-right'>Experience in various toy projects</div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row sm:justify-between items-start font-mono text-foreground w-full gap-4'>
          <div className='text-2xl sm:text-3xl font-bold sm:w-1/2'>Korea National Open University</div>
          <div className='flex flex-col justify-start items-start gap-2 sm:w-1/2 sm:items-end'>
            <div className='font-bold text-lg sm:text-xl'>Seoul, Korea</div>
            <div className='text-sm font-bold opacity-50'>Sept 2023 - Present</div>
            <div className='text-xs opacity-80 sm:text-right'>Experience in various toy projects</div>
          </div>
        </div>
      </div>
    </div>
  );
}