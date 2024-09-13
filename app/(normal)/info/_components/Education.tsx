import Chip from '@/components/chip/Chip';
import React from 'react';

export default function Education() {
  return (
    <div className='flex flex-col justify-center items-start w-full max-w-[900px] gap-4'>
      <Chip label='EDUCATION' />
      <div className='flex justify-between item-start font-mono text-foreground w-full'>
        <div className='text-3xl font-bold'>42 Seoul</div>
        <div className='flex flex-col justify-start items-start gap-2'>
          <div className='font-bold text-xl'>Seoul,Korea</div>
          <div className='text-sm font-bold opacity-50'>July.2022-July.2024</div>
          <div className='text-xs opacity-80'>Experience in various toy projects</div>
        </div>
      </div>
    </div>
  );
}

