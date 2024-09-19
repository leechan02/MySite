interface VideoBoxProps {
  src: string;
}

export default function VideoBox({ src }: VideoBoxProps) {
  return (
    <div className='bg-foreground/5 shadow border-2 border-foreground/10 rounded-2xl sm:rounded-[40px] backdrop-blur-[15px] w-full overflow-hidden'>
      <video
        className='w-full h-full object-cover'
        autoPlay
        loop
        muted
        playsInline
        preload='auto'
      >
        <source src={src} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
