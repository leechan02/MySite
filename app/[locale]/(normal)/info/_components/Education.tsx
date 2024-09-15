import Chip from '@/components/chip/Chip';
import React from 'react';

export default function Education() {
  return (
    <div className='flex flex-col justify-center items-start sm:w-[640px] lg:w-[900px] gap-16'>
      <Chip label='EDUCATION' />
      <div className='flex justify-between item-start font-mono text-foreground w-full'>
        <div className='text-3xl font-bold'>42 Seoul</div>
        <div className='flex flex-col justify-start items-start gap-2'>
          <div className='font-bold text-xl'>Seoul,Korea</div>
          <div className='text-sm font-bold opacity-50'>July.2022-July.2024</div>
          <div className='text-xs opacity-80'>Experience in various toy projects</div>
        </div>
      </div>
      <div className='flex justify-between item-start font-mono text-foreground w-full'>
        <div className='text-3xl font-bold'>Korea National Open University</div>
        <div className='flex flex-col justify-start items-start gap-2'>
          <div className='font-bold text-xl'>Seoul,Korea</div>
          <div className='text-sm font-bold opacity-50'>Sept. 2023 - Present</div>
          <div className='text-xs opacity-80'>Experience in various toy projects</div>
        </div>
      </div>
    </div>
  );
}

