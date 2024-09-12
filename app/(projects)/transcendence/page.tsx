import Image from "next/image";

export default async function Transcendence() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-16 relative'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='text-[60px] font-mono text-primary font-bold'>
            ft_transcendence
          </div>
          <div className='text-base font-mono text-primary/50 font-bold'>
            42 Seoul Nov.2023-April.2024
          </div>
        </div>
        <Image src='/image/transcendence.svg' alt='title image' width={800} height={500} />
        <div className="absolute -bottom-10 w-full h-60 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </div>
  );
}
