import ProjectBox from "@/components/box/ProjectBox";

export default async function Home() {
  return (
    <div className='flex-col justify-center items-center inline-flex gap-16'>
      <div className='flex flex-col justify-center items-center gap-2 px-4 text-center'>
        <div className='font-mono text-foreground text-3xl font-extrabold'>
          I enjoy create something.
        </div>
        <div className='font-mono text-foreground opacity-30 text-sm font-bold'>
          Baeksu in Korea.
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-12 xl:gap-16'>
        <ProjectBox
          title='bookmoeum'
          description='Book Search Web site.'
          date='Seoul Aug.2024'
          video='/video/bookmoeum.mp4'
          bgColor='bg-color3'
          link='/bookmoeum'
          size="big"
        />
        <ProjectBox
          title='MySite'
          description='Portfolio Web site.'
          date='Seoul Sep.2024'
          video='/video/mysite.mp4'
          bgColor='bg-color4'
          link='/mysite'
          size="small"
        />
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-16'>
        <ProjectBox
          title='webserv'
          description='Build webserver with c++98.'
          date='42 Seoul Jul.2023-Nov.2023'
          video='/video/webserv.mp4'
          bgColor='bg-color2'
          link='/webserv'
          size="small"
        />
        <ProjectBox
          title='transcendence'
          description='SPA Ping Pong Web site.'
          date='42 Seoul Nov.2023-April.2024'
          video='/video/transcendence.mp4'
          bgColor='bg-color1'
          link='/transcendence'
          size="big"
        />
      </div>
    </div>
  );
}
