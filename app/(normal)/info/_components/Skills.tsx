import Chip from "@/components/chip/Chip";

export default function Skills() {
  return (
    <div className='flex flex-col justify-center items-start sm:w-[640px] lg:w-[900px] gap-4'>
      <Chip label='EDUCATION' />
      <div className='flex justify-start items-center gap-2 font-mono text-foreground'>
        <div className='font-sm font-bold'>Language</div>
        <div className='font-xs font-bold opacity-50'>
          C/C++, JavaScript, TypeScript
        </div>
      </div>
      <div className='flex justify-start items-center gap-2 font-mono text-foreground'>
        <div className='font-sm font-bold'>Frontend</div>
        <div className='font-xs font-bold opacity-50'>
          React, Next.js, React Query, Redux, TailwindCSS, Framer Motion
        </div>
      </div>
      <div className='flex justify-start items-center gap-2 font-mono text-foreground'>
        <div className='font-sm font-bold'>Tools</div>
        <div className='font-xs font-bold opacity-50'>
          Git/GitHub, Figma, Slack, Notion, Visual Studio Code
        </div>
      </div>
    </div>
  );
}
