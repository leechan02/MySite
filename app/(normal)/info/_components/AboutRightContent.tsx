import Image from "next/image";

export default function AboutRightContent() {
  return (
    <div className='flex flex-col justify-center items-center gap-16'>
      <div className='relative w-[400px] h-[400px] border-10 border-color1 rounded-[40px] overflow-hidden'>
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
          I have a lot of curiosity and a strong desire <br /> to learn. The
          more I study, the more I realize
          <br /> how much I don’t know.
          <br /> Since I've had less time to study than others,
          <br /> I’ve worked even harder to catch up.
        </div>
        <div className='text-xs font-mono text-foreground opacity-50'>
          Through this, I've learned that while things <br /> can be difficult,
          nothing is impossible. I've solved problems, <br /> completed over 300
          code reviews, and written over
          <br /> 10,000 lines of code in a single project. <br /> This has made
          me unafraid of learning new technologies. <br /> Despite having no
          prior experience with frameworks <br /> like React or Next.js,
          <br />I built a website using Next.js in just two weeks.
        </div>
      </div>
      <div className='relative w-[400px] h-[400px] border-10 border-color1 rounded-[40px] overflow-hidden'>
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
          I enjoy learning, taking on challenges,
          <br /> and documenting my journey.
        </div>
        <div className='text-xs font-mono text-foreground opacity-50'>
          Out of curiosity, I read books to learn. <br /> I love challenges, so
          I dive in and try things—recently, <br /> I climbed the Himalayas. I
          believe that knowledge becomes truly mine
          <br /> when I write and speak about it, which is
          <br />
          why I run a YouTube channel like a personal journal. <br /> While I’m
          not a huge fan of exercise,
          <br /> I do it because I need to stay healthy
          <br /> to keep doing what I love.
        </div>
      </div>
    </div>
  );
}
