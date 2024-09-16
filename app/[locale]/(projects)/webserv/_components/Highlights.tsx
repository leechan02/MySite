import Image from "next/image";

export default function Highlights() {
  return (
    <div className='bg-foreground/5 shadow border-2 border-foreground/10 rounded-[40px] backdrop-blur-[15px] p-8 px-8 w-full flex flex-col justify-center items-center gap-6 font-mono'>
      <div className='text-sm opacity-50 font-bold'>HIGHLIGHTS</div>
      <div className='font-bold'>
        A high-performance HTTP/1.1 server implementation in C++98, featuring
        non-blocking I/O and advanced request handling capabilities for
        efficient web serving.
      </div>
      <div className='w-full max-w-4xl p-16 rounded-[40px] bg-color2 bg-opacity-20'>
        <div className='aspect-video w-full max-w-2xl mx-auto overflow-hidden rounded-lg'>
          <video
            className='w-full h-full object-cover'
            autoPlay
            loop
            muted
            playsInline
            preload='auto'
          >
            <source src='/video/webserv.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='w-full rounded-[40px] bg-color2 bg-opacity-20'>
        <Image
          src='/image/webserv.png'
          width={600}
          height={400}
          alt='webserv'
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
