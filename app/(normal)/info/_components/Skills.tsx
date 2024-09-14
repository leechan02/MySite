import Chip from "@/components/chip/Chip";

export default function Skills() {
  return (
    <div className='flex flex-col justify-center items-start sm:w-[640px] lg:w-[900px] gap-16'>
      <Chip label='SKILLS' />
      <div className='flex flex-col justify-start items-start gap-2 font-mono text-foreground'>
        <div className='text-sm font-bold'>Language</div>
        <div className='text-xs font-bold opacity-50'>
          C/C++, JavaScript, TypeScript
        </div>
      </div>
      <div className='flex flex-col justify-start items-start gap-2 font-mono text-foreground'>
        <div className='text-sm font-bold'>Frontend</div>
        <div className='text-xs font-bold opacity-50'>
          React, Next.js, React Query, Redux, TailwindCSS, Framer Motion
        </div>
      </div>
      <div className='flex flex-col justify-start items-start gap-2 font-mono text-foreground'>
        <div className='text-sm font-bold'>Tools</div>
        <div className='text-xs font-bold opacity-50'>
          Git/GitHub, Figma, Slack, Notion, Visual Studio Code
        </div>
      </div>
    </div>
  );
}
