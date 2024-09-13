import Image from "next/image";

export default function AboutLeftContent() {
  return (
    <div>
      <div className='flex justify-center items-center gap-4'>
        <div className='flex flex-col justify-center items-start gap-4 w-max-[320px]'>
          <div className='text-sm font-mono text-foreground font-bold'>
            My background in Computer Science
          </div>
          <div className='text-xs font-mono text-foreground opacity-50'>
            In 2022, I started my journey into development <br /> without
            knowing how to code or use a terminal. <br /> As I grew more curious
            about the world, <br /> I recognized many inefficiencies around me{" "}
            <br /> and realized the importance of problem-solving.
          </div>
          <div className='text-xs font-mono text-foreground opacity-50'>
            This led me to 42 Seoul, where I immersed myself <br /> in computer
            science fundamentals such as operating systems, <br /> data
            structures, and networks. Currently, <br /> I am focusing on
            frontend development <br /> to address real-world challenges.
          </div>
          <div className='relative w-[400px] h-[400px] border-10 border-color1 rounded-[40px] overflow-hidden'>
            <Image
              src='/image/profile.jpg'
              alt='profile'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

