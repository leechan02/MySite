import ProjectBoxBig from "@/components/box/ProjectBoxBig";
import ProjectBoxSmall from "@/components/box/ProjectBoxSmall";

export default async function Home() {
  return (
    <div className='flex-col justify-center items-center inline-flex gap-16'>
      <div className='flex justify-center items-center gap-16'>
        <ProjectBoxBig
          title='bookmoeum'
          description='Book Search Web site.'
          date='Seoul Aug.2024'
          video='/video/transcendence.mp4'
          bgColor='bg-color3'
        />
        <ProjectBoxSmall
          title='MySite'
          description='Portfolio Web site.'
          date='Seoul Sep.2024'
          video='/video/transcendence.mp4'
          bgColor='bg-color4'
        />
      </div>
      <div className='flex justify-center items-center gap-16'>
        <ProjectBoxSmall
          title='webserv'
          description='Build webserver with c++98.'
          date='42 Seoul Jul.2023-Nov.2023'
          video='/video/transcendence.mp4'
          bgColor='bg-color2'
        />
        <ProjectBoxBig
          title='ft_transcendence'
          description='SPA Ping Pong Web site.'
          date='42 Seoul Nov.2023-April.2024'
          video='/video/transcendence.mp4'
          bgColor='bg-color1'
        />
      </div>
    </div>
  );
}
