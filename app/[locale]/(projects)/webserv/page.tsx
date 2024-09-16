import Image from "next/image";
import Overview from "./_components/Overview";
import Highlights from "./_components/Highlights";

export default async function Webserv() {
  return (
    <div className='flex flex-col justify-center items-center gap-24 font-mono text-foreground w-[320px] sm:w-[640px] lg:w-[900px] '>
      <div className='flex flex-col text-center gap-4'>
        <h1 className='text-5xl font-bold'>Webserv</h1>
        <div className='font-bold opacity-50'>42 Seoul July 2023</div>
      </div>
      <div className='relative w-full rounded-3xl overflow-hidden flex justify-center items-center p-8'>
        <div className='absolute inset-0 border-8 border-color2 border-opacity-50 rounded-3xl pointer-events-none'></div>
        <Image
          src='/image/webserv.png'
          width={600}
          height={400}
          alt='webserv'
        />
        <div className='absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-background from-10% to-transparent' />
      </div>
      <Overview />
      <Highlights />
      <div className='w-[320px] sm:w-[640px] lg:w-[900px] border border-foreground opacity-10' />
    </div>
  );
}
