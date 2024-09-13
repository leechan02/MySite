import Image from "next/image";

export default function AboutLeftContent() {
  return (
    <div className='flex flex-col justify-center items-center gap-16 w-[300px] lg:w-[400px]'>
      <div className='flex flex-col justify-center items-start gap-4'>
        <div className='text-sm font-mono text-foreground font-bold'>
          My background in Computer Science
        </div>
        <div className='text-xs font-mono text-foreground opacity-50'>
          In 2022, I started my journey into development without knowing
          how to code or use a terminal. As I grew more curious about the
          world, I recognized many inefficiencies around me and
          realized the importance of problem-solving.
        </div>
        <div className='text-xs font-mono text-foreground opacity-50'>
          This led me to 42 Seoul, where I immersed myself in computer
          science fundamentals such as operating systems, data
          structures, and networks. Currently, I am focusing on frontend
          development to address real-world challenges.
        </div>
      </div>
      <div className='relative w-[300px] lg:w-[400px] h-[400px] border-10 border-color1 rounded-[40px] overflow-hidden'>
        <Image
          src='/image/profile.jpg'
          alt='profile'
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className='flex flex-col justify-center items-start gap-4'>
        <div className='text-sm font-mono text-foreground font-bold'>
          Coding style
        </div>
        <div className='text-xs font-mono text-foreground opacity-50'>
          I appreciate beauty, which is why I prioritize writing clean,
          understandable, and simple code. While optimization is
          important, I don't believe complex code is always
          better-performing.
        </div>
        <div className='text-xs font-mono text-foreground opacity-50'>
          As a developer, I value communication skills, especially since
          development is rarely a solo effort. Starting from scratch has
          taught me how to explain concepts clearly and in a way that
          others can easily understand.
        </div>
      </div>
      <div className='relative w-[300px] lg:w-[400px] h-[400px] border-10 border-color1 rounded-[40px] overflow-hidden'>
        <Image
          src='/image/street.jpeg'
          alt='profile'
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
