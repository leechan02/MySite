import Chip from '@/components/chip/Chip';
import React from 'react';

export default function About() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-black font-mono text-foreground text-center'>
        I enjoy defining problems and finding solutions <br /> to make the world
        a bit more convenient.
      </h1>
      <Chip label='ABOUT ME' />
    </div>
  );
}

