import Chip from "@/components/chip/Chip";
import React from "react";

export default function Etc() {
  return (
    <div className='flex flex-col justify-center items-start sm:w-[640px] lg:w-[900px] gap-4'>
      <Chip label='ETC' />
      <div className='flex justify-center items-center gap-2 font-mono text-foreground'>
        <div className='text-sm font-bold'>OPIc AL</div>
        <div className='text-xs font-bold opacity-50'>2024.6.7</div>
      </div>
      <div className='flex justify-center items-center gap-2 font-mono text-foreground'>
        <div className='text-sm font-bold'>
          Craftsman Information Processing
        </div>
        <div className='text-xs font-bold opacity-50'>2024.7.3</div>
      </div>
    </div>
  );
}
