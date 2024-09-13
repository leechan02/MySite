import Image from "next/image";

export default function AboutRightContent() {
  return (
    <div className='flex flex-col justify-center items-center gap-16'>
      <div className='relative w-[300px] lg:w-[400px] h-[400px] border-10 border-color1 rounded-[40px] overflow-hidden'>
        <Image
          src='/image/mountain.jpeg'
          alt='profile'
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className='flex flex-col justify-center items-start gap-4'>
        <div className='text-sm font-mono text-foreground font-bold'>
          But I want more
        </div>
        <div className='text-xs font-mono text-foreground opacity-50'>
          I have a lot of curiosity and a strong desire to learn. The more I
          study, the more I realize how much I don’t know. Since I've had less
          time to study than others, I’ve worked even harder to catch up.
        </div>
        <div className='text-xs font-mono text-foreground opacity-50'>
          Through this, I've learned that while things can be difficult, nothing
          is impossible. I've solved problems, completed over 300 code reviews,
          and written over 10,000 lines of code in a single project. This has
          made me unafraid of learning new technologies. Despite having no prior
          experience with frameworks like React or Next.js, I built a website
          using Next.js in just two weeks.
        </div>
      </div>
      <div className='relative w-[300px] lg:w-[400px] h-[400px] border-10 border-color1 rounded-[40px] overflow-hidden'>
        <Image
          src='/image/himalaya.jpeg'
          alt='profile'
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className='flex flex-col justify-center items-start gap-4'>
        <div className='text-sm font-mono text-foreground font-bold'>
          In my spare time,
        </div>
        <div className='text-xs font-mono text-foreground opacity-50'>
          I enjoy learning, taking on challenges, and documenting my journey.
        </div>
        <div className='text-xs font-mono text-foreground opacity-50'>
          Out of curiosity, I read books to learn. I love challenges, so I dive
          in and try things—recently, I climbed the Himalayas. I believe that
          knowledge becomes truly mine when I write and speak about it, which is
          why I run a YouTube channel like a personal journal. While I’m not a
          huge fan of exercise, I do it because I need to stay healthy to keep
          doing what I love.
        </div>
      </div>
    </div>
  );
}
